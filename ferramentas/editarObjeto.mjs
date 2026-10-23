// =========================================================================
// EDITAR OBJETO NO CÓDIGO
//
// Usado pelo modo de edição dos enfeites (só no npm run dev). Acha, num
// arquivo .js ou .astro, o objeto de um enfeite e troca ou acrescenta
// propriedades nele, mexendo o mínimo possível no texto: o resto do
// arquivo, os comentários e a formatação ficam como estavam.
//
// Onde o enfeite pode estar:
//   const LISTA = [ {..}, {..} ]   -> nome "LISTA", indice 0, 1, ...
//   const UM_SO = { .. }           -> nome "UM_SO", indice null
// Funções (const f = (x) => ({..})) não são editadas: devolvem erro, e o
// modo de edição mostra a mudança na lista para fazer à mão.
// =========================================================================

// Pula comentário ou texto entre aspas que começa em i. Devolve o índice
// logo depois dele, ou i se ali não começa nada disso.
function pular(t, i) {
  const c = t[i];
  const p = t[i + 1];
  if (c === "/" && p === "/") {
    const f = t.indexOf("\n", i);
    return f === -1 ? t.length : f;
  }
  if (c === "/" && p === "*") {
    const f = t.indexOf("*/", i + 2);
    return f === -1 ? t.length : f + 2;
  }
  if (c === '"' || c === "'" || c === "`") {
    let j = i + 1;
    while (j < t.length && t[j] !== c) {
      if (t[j] === "\\") j++;
      j++;
    }
    return j + 1;
  }
  return i;
}

// Índice do fechamento que casa com a abertura em i ({, [ ou ().
function fechamento(t, i) {
  let prof = 0;
  for (let j = i; j < t.length; ) {
    const k = pular(t, j);
    if (k !== j) {
      j = k;
      continue;
    }
    const c = t[j];
    if (c === "{" || c === "[" || c === "(") prof++;
    else if (c === "}" || c === "]" || c === ")") {
      prof--;
      if (prof === 0) return j;
    }
    j++;
  }
  return -1;
}

function pularEspacos(t, i) {
  for (;;) {
    while (i < t.length && /\s/.test(t[i])) i++;
    const k = pular(t, i);
    if (k !== i && (t[i] === "/")) {
      i = k;
      continue;
    }
    return i;
  }
}

// Acha o objeto { ... } do enfeite. Devolve { inicio, fim } (posições do
// "{" e do "}") ou lança erro em português.
export function acharObjeto(texto, nome, indice) {
  const re = new RegExp(`const\\s+${nome}\\s*=\\s*`);
  const achado = re.exec(texto);
  if (!achado) throw new Error(`não achei "const ${nome}" no arquivo`);
  let i = pularEspacos(texto, achado.index + achado[0].length);

  if (texto[i] === "{") {
    if (indice !== null && indice !== undefined) {
      throw new Error(`${nome} é um objeto só, não uma lista`);
    }
    return { inicio: i, fim: fechamento(texto, i) };
  }
  if (texto[i] !== "[") {
    throw new Error(`${nome} não é uma lista nem um objeto (talvez seja uma função)`);
  }
  if (indice === null || indice === undefined) {
    throw new Error(`${nome} é uma lista: falta dizer qual item`);
  }

  // Conta os objetos de primeiro nível dentro da lista.
  const fimLista = fechamento(texto, i);
  let n = 0;
  for (let j = i + 1; j < fimLista; ) {
    const k = pular(texto, j);
    if (k !== j) {
      j = k;
      continue;
    }
    const c = texto[j];
    if (c === "{") {
      const f = fechamento(texto, j);
      if (n === indice) return { inicio: j, fim: f };
      n++;
      j = f + 1;
      continue;
    }
    if (c === "[" || c === "(") {
      j = fechamento(texto, j) + 1;
      continue;
    }
    j++;
  }
  throw new Error(`${nome} tem só ${n} itens, não achei o item ${indice}`);
}

// Propriedades de primeiro nível do objeto. Cada uma: { chave, ini, fim,
// virgula } com ini/fim = trecho do valor e virgula = posição da vírgula
// depois dele (ou -1). Espalhamentos (...PADRAO) entram com chave null.
export function propriedades(texto, { inicio, fim }) {
  const lista = [];
  let i = inicio + 1;
  while (i < fim) {
    i = pularEspacos(texto, i);
    if (i >= fim) break;

    let chave = null;
    let comeco = i;
    if (texto.startsWith("...", i)) {
      i += 3;
    } else {
      const m = /^(?:([A-Za-z_$][\w$]*)|"([^"]*)"|'([^']*)')\s*:/.exec(texto.slice(i, fim));
      if (!m) throw new Error("não entendi um trecho do objeto");
      chave = m[1] ?? m[2] ?? m[3];
      i += m[0].length;
    }
    const ini = pularEspacos(texto, i);
    // Vai até a vírgula de primeiro nível ou o fim do objeto.
    let j = ini;
    while (j < fim) {
      const k = pular(texto, j);
      if (k !== j) {
        j = k;
        continue;
      }
      const c = texto[j];
      if (c === "{" || c === "[" || c === "(") {
        j = fechamento(texto, j) + 1;
        continue;
      }
      if (c === ",") break;
      j++;
    }
    // Fim do valor: último caractere que não é espaço nem comentário.
    let f = j;
    while (f > ini && /\s/.test(texto[f - 1])) f--;
    lista.push({ chave, comeco, ini, fim: f, virgula: j < fim ? j : -1 });
    i = j + 1;
  }
  return lista;
}

// Escreve um valor JS do jeito do projeto (aspas duplas).
export function formatar(valor) {
  if (typeof valor === "string") return JSON.stringify(valor);
  if (typeof valor === "number") {
    return String(Math.round(valor * 1000) / 1000);
  }
  if (typeof valor === "boolean") return String(valor);
  throw new Error(`valor que não sei escrever: ${JSON.stringify(valor)}`);
}

// Troca (ou acrescenta no fim) a propriedade. Devolve o texto novo.
export function definir(texto, nome, indice, chave, valor) {
  const obj = acharObjeto(texto, nome, indice);
  const props = propriedades(texto, obj);
  const quebra = texto.includes("\r\n") ? "\r\n" : "\n";
  const novo = formatar(valor);

  // A última ocorrência vale (vem depois de qualquer espalhamento).
  const existente = [...props].reverse().find((p) => p.chave === chave);
  if (existente) {
    return texto.slice(0, existente.ini) + novo + texto.slice(existente.fim);
  }

  // Recuo das propriedades: o da linha onde começa a última delas.
  const ultima = props[props.length - 1];
  const recuoDe = (pos) => {
    const comecoLinha = texto.lastIndexOf("\n", pos) + 1;
    return /^[ \t]*/.exec(texto.slice(comecoLinha))[0];
  };
  const linhaNova = `${chave}: ${novo},`;

  if (!ultima) {
    const recuo = recuoDe(obj.inicio);
    return (
      texto.slice(0, obj.inicio + 1) +
      quebra + recuo + "  " + linhaNova + quebra + recuo +
      texto.slice(obj.fim)
    );
  }
  const recuo = recuoDe(ultima.comeco);
  if (ultima.virgula !== -1) {
    const pos = ultima.virgula + 1;
    return texto.slice(0, pos) + quebra + recuo + linhaNova + texto.slice(pos);
  }
  const pos = ultima.fim;
  return texto.slice(0, pos) + "," + quebra + recuo + linhaNova + texto.slice(pos);
}

// Linha (1, 2, ...) onde começa o objeto, para mostrar na resposta.
export function linhaDoObjeto(texto, nome, indice) {
  const { inicio } = acharObjeto(texto, nome, indice);
  return texto.slice(0, inicio).split("\n").length;
}
