// =========================================================================
// ENFEITES DE TODAS AS SEÇÕES
//
// Cada lista abaixo é desenhada pelo componente <Enfeites lista={...} />.
// Para mexer nas formas decorativas de uma seção, edite só a lista dela.
//
// Campos de cada enfeite (todos opcionais, menos forma):
//   forma          nome do arquivo em src/assets/formas, sem ".svg"
//   cor            sempre uma variável de global.css, ex.: "var(--roxo)"
//   opacidade      de 0 a 1
//   tamanho        largura. Número vira px; texto passa direto ("8vw", "40%")
//   topo / baixo   distância do topo ou da base da seção
//   esquerda / direita
//   giro           rotação em graus
//   frente         true: passa por cima da onda da seção
//   papel          true: carimba a textura de papel dentro da forma
//   forcaPapel     quanto o papel aparece, de 0 a 1
//   noCelular      true: continua aparecendo abaixo de 720px
//   tamanhoMobile, topoMobile, esquerdaMobile, direitaMobile
//                  valores só para o celular (precisam de noCelular)
//
// Medidas: as posições vieram dos PNGs de referência do layout (1920px).
// Tamanho e topo em vw acompanham a largura da tela; esquerda em % da
// seção. Enfeites ancorados por "baixo" não dependem da altura da seção.
// =========================================================================

// ------------------------------------------------------------------ HERO
// Formas laranja bem apagadas. Todas usam o mesmo padrão; cada item só
// diz o que muda.
const PADRAO_HERO = {
  cor: "var(--laranja)",
  opacidade: 0.2,
  noCelular: true,
  tamanhoMobile: 58,
  topoMobile: "8%",
  esquerdaMobile: "-2%",
};

export const ENFEITES_HERO = [
  {
    ...PADRAO_HERO,
    forma: "trevo-cinco-lados",
    tamanho: 220,
    topo: "10%",
    esquerda: "-5%",
  },
  {
    ...PADRAO_HERO,
    forma: "asterisco",
    tamanho: 400,
    topo: "-10%",
    direita: "-10%",
  },
  {
    ...PADRAO_HERO,
    forma: "estrela-cinco-lados",
    tamanho: 100,
    topo: "20%",
    esquerda: "40%",
  },
  {
    ...PADRAO_HERO,
    forma: "trevo-cinco-lados",
    tamanho: 150,
    topo: "20%",
    direita: "20%",
  },
  {
    ...PADRAO_HERO,
    forma: "estrela-cinco-lados",
    tamanho: 160,
    topo: "60%",
    direita: "10%",
    giro: 12.5,
  },
  {
    ...PADRAO_HERO,
    forma: "estrela-arredondada",
    tamanho: 240,
    topo: "58%",
    esquerda: "-5%",
    giro: 12.5,
  },
];

// --------------------------------------------------------------- CITAÇÃO
// Referência: fundos/citacao.png.
const APAGADA_CITACAO = {
  cor: "var(--lilas-acinzentado)",
  opacidade: 0.2,
};

export const ENFEITES_CITACAO = [
  // Escorrem da onda creme, por cima do roxo.
  {
    forma: "trevo",
    cor: "var(--creme)",
    tamanho: 130,
    topo: "3%",
    esquerda: "12%",
    frente: true,
    papel: true,
    forcaPapel: 0.15,
    noCelular: true,
    tamanhoMobile: 76,
    topoMobile: "1%",
    esquerdaMobile: "4%",
  },
  {
    forma: "estrela-arredondada",
    cor: "var(--creme)",
    tamanho: 300,
    topo: "-19%",
    direita: "4%",
    giro: 35,
    frente: true,
    papel: true,
    forcaPapel: 0.15,
    noCelular: true,
    tamanhoMobile: 140,
    topoMobile: "-8%",
    direitaMobile: "-8%",
  },

  // Fundo, parte de cima.
  {
    ...APAGADA_CITACAO,
    forma: "asterisco",
    tamanho: "19.8vw",
    topo: "4.1vw",
    esquerda: "-6.2%",
  },
  {
    ...APAGADA_CITACAO,
    forma: "estrela",
    tamanho: "5vw",
    topo: "4.8vw",
    esquerda: "13.6%",
  },
  {
    ...APAGADA_CITACAO,
    forma: "asterisco",
    tamanho: "15vw",
    topo: "4.8vw",
    esquerda: "54.5%",
    giro: 12,
  },
  {
    ...APAGADA_CITACAO,
    forma: "estrela",
    tamanho: "2.3vw",
    topo: "5.5vw",
    esquerda: "30.5%",
  },
  {
    ...APAGADA_CITACAO,
    forma: "asterisco",
    tamanho: "15vw",
    topo: "6.1vw",
    esquerda: "93.9%",
  },
  {
    ...APAGADA_CITACAO,
    forma: "estrela-arredondada",
    tamanho: "6.6vw",
    topo: "8.5vw",
    esquerda: "36.4%",
    giro: 8,
    papel: true,
    noCelular: true,
    tamanhoMobile: "11vw",
    topoMobile: "22%",
  },
  {
    ...APAGADA_CITACAO,
    forma: "trevo",
    tamanho: "6.6vw",
    topo: "8.9vw",
    esquerda: "75.6%",
  },
  {
    ...APAGADA_CITACAO,
    forma: "estrela",
    tamanho: "5vw",
    topo: "10.5vw",
    esquerda: "22%",
    noCelular: true,
    tamanhoMobile: "8vw",
    topoMobile: "26%",
  },
  {
    ...APAGADA_CITACAO,
    forma: "estrela",
    tamanho: "2.25vw",
    topo: "14.4vw",
    esquerda: "91.2%",
  },
  {
    ...APAGADA_CITACAO,
    forma: "estrela",
    tamanho: "2.25vw",
    topo: "16.7vw",
    esquerda: "47.7%",
  },

  // Fundo, parte de baixo. Ancoradas pela base e inteiras dentro da
  // seção, senão o fim dela corta a forma numa linha reta.
  {
    ...APAGADA_CITACAO,
    forma: "trevo",
    tamanho: "6.6vw",
    baixo: "1.5vw",
    esquerda: "95%",
  },
  {
    ...APAGADA_CITACAO,
    forma: "estrela",
    tamanho: "2.25vw",
    baixo: "4.7vw",
    esquerda: "9.1%",
  },
  {
    ...APAGADA_CITACAO,
    forma: "estrela-arredondada",
    tamanho: "9.1vw",
    baixo: "0.3vw",
    esquerda: "28.6%",
    giro: -10,
    papel: true,
  },
  {
    ...APAGADA_CITACAO,
    forma: "trevo",
    tamanho: "7.5vw",
    baixo: "0.4vw",
    esquerda: "3%",
    noCelular: true,
    tamanhoMobile: "14vw",
  },
  {
    ...APAGADA_CITACAO,
    forma: "estrela",
    tamanho: "2.25vw",
    baixo: "1.8vw",
    esquerda: "81%",
  },
  {
    ...APAGADA_CITACAO,
    forma: "estrela",
    tamanho: "5.7vw",
    baixo: "0.6vw",
    esquerda: "90.5%",
    noCelular: true,
    tamanhoMobile: "9vw",
  },
];

// -------------------------------------------------------- SOBRE O PROJETO
// Referência: fundos/sobre-projeto.png.
export const ENFEITES_SOBRE_PROJETO = [
  // Vêm do fim da citação e passam por cima da onda roxa.
  {
    forma: "asterisco",
    cor: "var(--branco-gelo)",
    tamanho: "8.7vw",
    topo: "0.1vw",
    esquerda: "13.1%",
    giro: -8,
    frente: true,
    noCelular: true,
    tamanhoMobile: "16vw",
  },
  {
    forma: "estrela",
    cor: "var(--bege)",
    tamanho: "2.7vw",
    topo: "4.3vw",
    esquerda: "37.8%",
    frente: true,
  },
  {
    forma: "estrela-arredondada",
    cor: "var(--branco-gelo)",
    tamanho: "7.1vw",
    topo: "1.7vw",
    esquerda: "72%",
    giro: 10,
    frente: true,
    noCelular: true,
    tamanhoMobile: "12vw",
  },

  // Formas roxas penduradas na onda.
  {
    forma: "trevo",
    cor: "var(--roxo)",
    tamanho: "8.3vw",
    topo: "2.3vw",
    esquerda: "83.1%",
    noCelular: true,
    tamanhoMobile: "14vw",
  },
  {
    forma: "estrela-arredondada",
    cor: "var(--roxo)",
    tamanho: "6.6vw",
    topo: "6.1vw",
    esquerda: "9%",
    noCelular: true,
    tamanhoMobile: "12vw",
  },
  {
    forma: "asterisco",
    cor: "var(--roxo)",
    tamanho: "14.5vw",
    topo: "10vw",
    esquerda: "93.3%",
    giro: 20,
    noCelular: true,
    tamanhoMobile: "22vw",
  },
  {
    forma: "estrela",
    cor: "var(--roxo)",
    opacidade: 0.8,
    tamanho: "2.25vw",
    topo: "12.7vw",
    esquerda: "87.2%",
  },
  {
    forma: "estrela",
    cor: "var(--roxo)",
    opacidade: 0.8,
    tamanho: "2.25vw",
    topo: "15.4vw",
    esquerda: "4.8%",
  },
];

// Brilho preso no canto de baixo do vídeo. As medidas são relativas ao
// vídeo, não à seção.
export const BRILHO_VIDEO = {
  forma: "estrela",
  cor: "var(--roxo)",
  opacidade: 0.8,
  tamanho: "1.8vw",
  topo: "calc(100% - 0.4vw)",
  esquerda: "calc(100% - 0.4vw)",
};

// ---------------------------------------------------- QUEM JÁ FEZ O CURSO
// Formas lilases atrás do computador. Antes vinham prontas numa imagem
// (fundos/quem-fez.png); agora são enfeites como nas outras seções.
// As medidas são em % da caixa da ilustração (não da seção), então as
// formas crescem e encolhem junto com o computador.
const LILAS_PARA_QUEM = {
  cor: "var(--lilas)",
  noCelular: true,
};

export const ENFEITES_PARA_QUEM = [
  {
    ...LILAS_PARA_QUEM,
    forma: "flor",
    opacidade: 0.52,
    tamanho: "44.5%",
    topo: "18.1%",
    esquerda: "3.1%",
  },
  {
    ...LILAS_PARA_QUEM,
    forma: "asterisco",
    opacidade: 0.77,
    tamanho: "53%",
    topo: "23%",
    esquerda: "36.8%",
    giro: 15,
  },
  {
    ...LILAS_PARA_QUEM,
    forma: "trevo-cinco-lados",
    tamanho: "35.3%",
    topo: "58.5%",
    esquerda: "19.1%",
  },
  {
    ...LILAS_PARA_QUEM,
    forma: "estrela",
    opacidade: 0.5,
    tamanho: "8.9%",
    topo: "0.3%",
    esquerda: "63.2%",
  },
  {
    ...LILAS_PARA_QUEM,
    forma: "estrela-cinco-lados",
    opacidade: 0.65,
    tamanho: "11.8%",
    topo: "8.7%",
    esquerda: "2.5%",
    giro: 32,
  },
  {
    ...LILAS_PARA_QUEM,
    forma: "estrela-cinco-lados",
    opacidade: 0.8,
    tamanho: "17.5%",
    topo: "18.4%",
    esquerda: "84%",
    giro: 10,
  },
];

// -------------------------------------------------------- SOBRE O CURSO
// Referência: fundos/sobre-curso.png. As formas grandes usam o lilás
// médio em opacidade baixa sobre o lilás do fundo.
export const ENFEITES_SOBRE_CURSO = [
  // Brancas penduradas na onda que vem do "Quem já fez o curso?".
  {
    forma: "trevo-cinco-lados",
    cor: "var(--branco-gelo)",
    tamanho: "12.6vw",
    topo: "-1.1vw",
    esquerda: "7.4%",
    noCelular: true,
    tamanhoMobile: "18vw",
  },
  {
    forma: "asterisco",
    cor: "var(--branco-gelo)",
    tamanho: "12.6vw",
    topo: "-3.9vw",
    esquerda: "73.8%",
    giro: 15,
  },

  // Grandes e apagadas, no fundo.
  {
    forma: "asterisco",
    cor: "var(--lilas-medio)",
    opacidade: 0.3,
    tamanho: "30vw",
    topo: "-4vw",
    esquerda: "31%",
  },
  {
    forma: "estrela-arredondada",
    cor: "var(--lilas-medio)",
    opacidade: 0.35,
    tamanho: "25.8vw",
    topo: "23.9vw",
    esquerda: "82.8%",
    giro: 8,
  },
  {
    forma: "asterisco",
    cor: "var(--lilas-medio)",
    opacidade: 0.3,
    tamanho: "32vw",
    topo: "22vw",
    esquerda: "-17%",
    giro: -10,
  },
  {
    forma: "trevo-cinco-lados",
    cor: "var(--lilas-medio)",
    opacidade: 0.3,
    tamanho: "22vw",
    baixo: "0.5vw",
    esquerda: "31%",
  },

  // Destaques em roxo claro e branco.
  {
    forma: "estrela",
    cor: "var(--roxo-claro)",
    tamanho: "3.1vw",
    topo: "6.8vw",
    esquerda: "66.1%",
  },
  {
    forma: "trevo",
    cor: "var(--roxo-claro)",
    tamanho: "12.7vw",
    topo: "7.9vw",
    esquerda: "93.5%",
    noCelular: true,
    tamanhoMobile: "18vw",
  },
  {
    forma: "estrela-arredondada",
    cor: "var(--branco-gelo)",
    tamanho: "8.4vw",
    topo: "9.9vw",
    esquerda: "67.7%",
    giro: 12,
    noCelular: true,
    tamanhoMobile: "13vw",
  },
  {
    forma: "estrela",
    cor: "var(--roxo-claro)",
    opacidade: 0.52,
    tamanho: "4vw",
    topo: "10.8vw",
    esquerda: "15.4%",
  },
  {
    forma: "estrela-arredondada",
    cor: "var(--roxo-claro)",
    tamanho: "9.8vw",
    topo: "13.5vw",
    esquerda: "3%",
    noCelular: true,
    tamanhoMobile: "15vw",
  },
  {
    forma: "trevo",
    cor: "var(--roxo-claro)",
    opacidade: 0.87,
    tamanho: "5.5vw",
    topo: "13.5vw",
    esquerda: "22.9%",
  },
  {
    forma: "estrela",
    cor: "var(--roxo-claro)",
    opacidade: 0.66,
    tamanho: "4.3vw",
    topo: "16.4vw",
    esquerda: "90%",
  },
];

// ------------------------------------------------- MATERIAIS ADICIONAIS
// Os enfeites mais para baixo usam topo em %, porque a altura da seção
// muda com a largura da tela e com o texto.
const APAGADA_MATERIAIS = {
  cor: "var(--pessego-apagado)",
  opacidade: 0.5,
};

export const ENFEITES_MATERIAIS = [
  // Grandes e apagadas, no fundo.
  {
    ...APAGADA_MATERIAIS,
    forma: "estrela-cinco-lados",
    tamanho: "30.7vw",
    topo: "7vw",
    esquerda: "7.7%",
    giro: -15,
  },
  {
    ...APAGADA_MATERIAIS,
    forma: "estrela",
    tamanho: "8.8vw",
    topo: "30%",
    esquerda: "54.2%",
  },
  {
    ...APAGADA_MATERIAIS,
    forma: "trevo-cinco-lados",
    tamanho: "17.5vw",
    topo: "20%",
    esquerda: "82.2%",
  },
  {
    ...APAGADA_MATERIAIS,
    forma: "asterisco",
    tamanho: "36vw",
    topo: "38%",
    esquerda: "40%",
    giro: 10,
  },
  {
    ...APAGADA_MATERIAIS,
    forma: "trevo-cinco-lados",
    tamanho: "24vw",
    topo: "58%",
    esquerda: "-2%",
    giro: -8,
  },
  {
    ...APAGADA_MATERIAIS,
    forma: "trevo-cinco-lados",
    tamanho: "20vw",
    baixo: "0",
    esquerda: "72%",
    giro: 20,
  },

  // Penduradas na onda lilás.
  {
    forma: "estrela-arredondada",
    cor: "var(--lilas)",
    tamanho: "16vw",
    topo: "-7vw",
    esquerda: "4%",
    giro: -10,
  },
  {
    forma: "estrela-arredondada",
    cor: "var(--lilas)",
    tamanho: "19vw",
    topo: "-6vw",
    esquerda: "73%",
    giro: 6,
    noCelular: true,
    tamanhoMobile: "26vw",
  },

  // Destaques do topo.
  {
    forma: "estrela",
    cor: "var(--lilas-forte)",
    opacidade: 0.6,
    tamanho: "4vw",
    topo: "6vw",
    esquerda: "3.6%",
  },
  {
    forma: "trevo-cinco-lados",
    cor: "var(--salmao)",
    tamanho: "7.1vw",
    topo: "8.9vw",
    esquerda: "6.2%",
    noCelular: true,
    tamanhoMobile: "11vw",
  },
  {
    forma: "asterisco",
    cor: "var(--vermelho)",
    tamanho: "18vw",
    topo: "17.5vw",
    esquerda: "-7%",
    giro: -6,
    noCelular: true,
    tamanhoMobile: "24vw",
    esquerdaMobile: "-12%",
  },
  {
    forma: "estrela-arredondada",
    cor: "var(--salmao-forte)",
    tamanho: "7.5vw",
    topo: "30%",
    esquerda: "78.1%",
    topoMobile: "8%",
    esquerdaMobile: "82.1%",
    giro: 14,
    frente: true,
    noCelular: true,
    tamanhoMobile: "11vw",
  },
  {
    forma: "trevo-cinco-lados",
    cor: "var(--lilas-forte)",
    tamanho: "9.7vw",
    topo: "9.3vw",
    esquerda: "58%",
  },
  {
    forma: "estrela-cinco-lados",
    cor: "var(--salmao-forte)",
    tamanho: "4.4vw",
    topo: "19vw",
    esquerda: "67%",
    giro: 10,
  },
  {
    forma: "estrela",
    cor: "var(--lilas-forte)",
    opacidade: 0.6,
    tamanho: "4vw",
    topo: "12.9vw",
    esquerda: "73.4%",
  },

  {
    forma: "asterisco",
    cor: "var(--lilas)",
    tamanho: "18.8vw",
    topo: "8.9vw",
    esquerda: "90%",
    giro: 18,
    noCelular: true,
    tamanhoMobile: "24vw",
  },
];

// Estrelinha vermelha no canto de baixo de cada capa, do lado de fora.
// Nas capas da direita (invertido) ela troca de lado.
const TAMANHO_ESTRELINHA = "clamp(20px, 2.4vw, 42px)";
const RECUO_ESTRELINHA = `calc(${TAMANHO_ESTRELINHA} * -0.7)`;

export const estrelinhaCapa = (invertido) => ({
  forma: "estrela",
  cor: "var(--vermelho)",
  tamanho: TAMANHO_ESTRELINHA,
  baixo: RECUO_ESTRELINHA,
  esquerda: invertido ? null : RECUO_ESTRELINHA,
  direita: invertido ? RECUO_ESTRELINHA : null,
  frente: true,
});

// ------------------------------------------------------------------- FAQ
// Os de baixo se ancoram pela base, para não depender de quantas
// perguntas houver.
export const ENFEITES_FAQ = [
  // Topo, à esquerda.
  {
    forma: "asterisco",
    cor: "var(--lilas-claro)",
    tamanho: "13vw",
    topo: "0.5vw",
    // O centro precisa ficar dentro da tela, senão a forma nunca brota.
    esquerda: "-5%",
    giro: 12,
    noCelular: true,
    tamanhoMobile: "24vw",
  },
  {
    forma: "trevo-cinco-lados",
    cor: "var(--lilas-medio)",
    tamanho: "7.7vw",
    topo: "3.5vw",
    esquerda: "12%",
    noCelular: true,
    tamanhoMobile: "12vw",
    esquerdaMobile: "16%",
  },
  {
    forma: "estrela",
    cor: "var(--pessego-claro)",
    tamanho: "3.7vw",
    topo: "12vw",
    esquerda: "5.2%",
  },

  // Topo, à direita.
  {
    forma: "estrela",
    cor: "var(--lilas-claro)",
    tamanho: "4.2vw",
    topo: "3.1vw",
    esquerda: "74%",
  },
  {
    forma: "trevo-cinco-lados",
    cor: "var(--lilas-medio)",
    tamanho: "7.7vw",
    topo: "1vw",
    esquerda: "84%",
  },
  {
    forma: "estrela-cinco-lados",
    cor: "var(--pessego-claro)",
    tamanho: "5.2vw",
    topo: "8vw",
    esquerda: "82.6%",
    giro: -8,
  },
  {
    forma: "estrela-arredondada",
    cor: "var(--roxo-medio)",
    tamanho: "14.4vw",
    topo: "3vw",
    esquerda: "91.5%",
    giro: 10,
    noCelular: true,
    tamanhoMobile: "20vw",
    esquerdaMobile: "88%",
  },

  // Base.
  {
    forma: "trevo-cinco-lados",
    cor: "var(--lilas-medio)",
    tamanho: "4.6vw",
    baixo: "9vw",
    esquerda: "0.5%",
    noCelular: true,
    tamanhoMobile: "10vw",
  },
  {
    forma: "estrela",
    cor: "var(--lilas-medio)",
    tamanho: "2.3vw",
    baixo: "7.5vw",
    esquerda: "4.5%",
  },
  {
    forma: "estrela",
    cor: "var(--lilas-medio)",
    tamanho: "2.3vw",
    baixo: "12vw",
    esquerda: "95.5%",
  },
  {
    forma: "estrela",
    cor: "var(--lilas-medio)",
    tamanho: "4.4vw",
    baixo: "6.5vw",
    esquerda: "92%",
    noCelular: true,
    tamanhoMobile: "8vw",
  },

  // Cantos de baixo, em roxo, meio escondidos pelo fim da seção.
  {
    forma: "asterisco",
    cor: "var(--roxo)",
    tamanho: "11vw",
    baixo: "-3vw",
    esquerda: "-2.5%",
    giro: -8,
    noCelular: true,
    tamanhoMobile: "17vw",
  },
  {
    forma: "estrela-arredondada",
    cor: "var(--roxo)",
    tamanho: "10vw",
    baixo: "-3.5vw",
    esquerda: "91%",
    giro: 14,
    noCelular: true,
    tamanhoMobile: "20vw",
    esquerdaMobile: "84%",
  },
];
