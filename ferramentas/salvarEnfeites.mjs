// =========================================================================
// SALVAR ENFEITES (plugin do Vite, só no npm run dev)
//
// Recebe as mudanças feitas no modo de edição dos enfeites e grava direto
// nos arquivos do projeto (src/data/enfeites.js, Citacao.astro, ...).
// Não existe no site publicado: o "apply: serve" faz o plugin rodar só no
// servidor de desenvolvimento.
//
// POST /__enfeites/salvar
//   { mudancas: [ { arquivo, nome, indice, props: { chave: valor } } ] }
// Resposta: { resultados: [ { rotulo, ok, linha?, erro? } ] }
// =========================================================================

import fs from "node:fs";
import path from "node:path";
import { definir, linhaDoObjeto } from "./editarObjeto.mjs";

const NOME_VALIDO = /^[A-Za-z_$][\w$]*$/;
const CHAVE_VALIDA = /^[A-Za-z_$][\w$]*$/;

function lerCorpo(req) {
  return new Promise((ok, falha) => {
    let dados = "";
    req.on("data", (p) => (dados += p));
    req.on("end", () => {
      try {
        ok(JSON.parse(dados || "{}"));
      } catch (e) {
        falha(e);
      }
    });
    req.on("error", falha);
  });
}

export default function salvarEnfeites() {
  let raiz = process.cwd();

  return {
    name: "salvar-enfeites",
    apply: "serve",
    configResolved(config) {
      raiz = config.root || raiz;
    },
    configureServer(server) {
      server.middlewares.use("/__enfeites/salvar", async (req, res, next) => {
        if (req.method !== "POST") return next();
        const responder = (status, corpo) => {
          res.statusCode = status;
          res.setHeader("content-type", "application/json; charset=utf-8");
          res.end(JSON.stringify(corpo));
        };

        let corpo;
        try {
          corpo = await lerCorpo(req);
        } catch {
          return responder(400, { erro: "pedido sem JSON válido" });
        }
        const mudancas = Array.isArray(corpo.mudancas) ? corpo.mudancas : [];
        const pastaSrc = path.resolve(raiz, "src");

        // Agrupa por arquivo: lê uma vez, aplica tudo, grava uma vez.
        const porArquivo = new Map();
        const resultados = [];
        for (const m of mudancas) {
          const rotulo = m.indice === null || m.indice === undefined ? m.nome : `${m.nome}[${m.indice}]`;
          const caminho = path.resolve(raiz, String(m.arquivo || ""));
          const problema =
            !caminho.startsWith(pastaSrc + path.sep) ? "arquivo fora da pasta src"
            : !/\.(js|mjs|astro)$/.test(caminho) ? "tipo de arquivo não permitido"
            : !NOME_VALIDO.test(String(m.nome || "")) ? "nome de lista inválido"
            : null;
          if (problema) {
            resultados.push({ rotulo, ok: false, erro: problema });
            continue;
          }
          if (!porArquivo.has(caminho)) porArquivo.set(caminho, []);
          porArquivo.get(caminho).push({ ...m, rotulo });
        }

        for (const [caminho, lista] of porArquivo) {
          let texto;
          try {
            texto = fs.readFileSync(caminho, "utf8");
          } catch {
            lista.forEach((m) => resultados.push({ rotulo: m.rotulo, ok: false, erro: "não consegui ler o arquivo" }));
            continue;
          }
          const original = texto;
          for (const m of lista) {
            try {
              let novo = texto;
              for (const [chave, valor] of Object.entries(m.props || {})) {
                if (!CHAVE_VALIDA.test(chave)) throw new Error(`propriedade inválida: ${chave}`);
                novo = definir(novo, m.nome, m.indice ?? null, chave, valor);
              }
              texto = novo;
              resultados.push({
                rotulo: m.rotulo,
                ok: true,
                arquivo: path.relative(raiz, caminho).replaceAll("\\", "/"),
                linha: linhaDoObjeto(texto, m.nome, m.indice ?? null),
              });
            } catch (e) {
              resultados.push({ rotulo: m.rotulo, ok: false, erro: e.message });
            }
          }
          if (texto !== original) fs.writeFileSync(caminho, texto, "utf8");
        }

        responder(200, { resultados });
      });
    },
  };
}
