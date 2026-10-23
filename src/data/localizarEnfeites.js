// =========================================================================
// LOCALIZAR ENFEITES NO CÓDIGO
//
// Usado só pelo modo de depuração (npm run dev): descobre em que arquivo
// e em que linha cada enfeite foi escrito, para a etiqueta do depurador
// abrir o VS Code direto no lugar certo.
//
// Lê o próprio arquivo-fonte e conta os objetos { ... } de primeiro nível
// dentro do array. Pula comentários e textos entre aspas, então itens
// comentados (// { ... }) não bagunçam a contagem.
// =========================================================================

import fs from "node:fs";
import path from "node:path";

const RAIZ = process.cwd();
const cache = new Map();

function ler(arquivo) {
  const caminho = path.resolve(RAIZ, arquivo);
  if (!cache.has(caminho)) {
    try {
      cache.set(caminho, fs.readFileSync(caminho, "utf8"));
    } catch {
      cache.set(caminho, null);
    }
  }
  return cache.get(caminho);
}

const linhaDoIndice = (texto, i) => texto.slice(0, i).split("\n").length;

// Linha onde a constante é declarada (const NOME = ...).
export function linhaDe(arquivo, nome) {
  const texto = ler(arquivo);
  if (!texto) return null;
  const achado = new RegExp(`const\\s+${nome}\\s*=`).exec(texto);
  return achado ? linhaDoIndice(texto, achado.index) : null;
}

// Linha de cada item da lista (const NOME = [ {..}, {..} ]), na ordem.
export function linhasDaLista(arquivo, nome) {
  const texto = ler(arquivo);
  if (!texto) return [];
  const achado = new RegExp(`const\\s+${nome}\\s*=\\s*\\[`).exec(texto);
  if (!achado) return [];

  const linhas = [];
  let profundidade = 0;
  let i = achado.index + achado[0].length - 1; // no "["

  for (; i < texto.length; i++) {
    const c = texto[i];
    const prox = texto[i + 1];

    if (c === "/" && prox === "/") {
      i = texto.indexOf("\n", i);
      if (i === -1) break;
      continue;
    }
    if (c === "/" && prox === "*") {
      i = texto.indexOf("*/", i + 2) + 1;
      if (i === 0) break;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      for (i++; i < texto.length && texto[i] !== c; i++) {
        if (texto[i] === "\\") i++;
      }
      continue;
    }

    if (c === "[" || c === "{" || c === "(") {
      if (c === "{" && profundidade === 1) linhas.push(linhaDoIndice(texto, i));
      profundidade++;
    } else if (c === "]" || c === "}" || c === ")") {
      profundidade--;
      if (profundidade === 0) break;
    }
  }
  return linhas;
}

// Monta a "origem" que o <Enfeite> mostra no depurador.
export function origemDe(arquivo, nome, indice = null) {
  const linha =
    indice === null
      ? linhaDe(arquivo, nome)
      : (linhasDaLista(arquivo, nome)[indice] ?? linhaDe(arquivo, nome));
  return {
    rotulo: indice === null ? nome : `${nome}[${indice}]`,
    arquivo,
    caminho: path.resolve(RAIZ, arquivo).replaceAll("\\", "/"),
    linha,
  };
}
