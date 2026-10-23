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
//   giroMobile, opacidadeMobile
//                  rotação e opacidade só no celular (precisam de noCelular)
//   frente         true: passa por cima da onda da seção (= camada 1)
//   camada         z-index só deste enfeite, dentro da seção: 0 atrás da
//                  onda (padrão), 1 na frente da onda e atrás do conteúdo,
//                  3 ou mais na frente do texto. Negativo vai para trás
//                  de tudo, menos da cor de fundo. Se informado, ignora
//                  o frente
//   camadaMobile   z-index só no celular (precisa de noCelular)
//   vazar          true: atravessa a borda de cima ou de baixo da seção e
//                  continua na seção vizinha, sem ser cortado. Lá, segue a
//                  mesma camada (0 atrás do texto da vizinha, 3 na frente)
//   vazarMobile    o mesmo, só no celular (padrão: igual ao vazar)
//   papel          true: carimba a textura de papel dentro da forma
//   forcaPapel     quanto o papel aparece, de 0 a 1
//   noCelular      true: continua aparecendo abaixo de 720px
//   tamanhoMobile, topoMobile, baixoMobile, esquerdaMobile, direitaMobile
//                  valores só para o celular (precisam de noCelular)
//
// Composição no celular (abaixo de 720px): os enfeites ficam nas margens
// e nos vãos entre os blocos de texto, alternando esquerda e direita
// como num zigue-zague, sem um encostar no outro. Na hora de mexer,
// confira se cada lado da seção continua com peso parecido.
//
// Medidas: as posições vieram dos PNGs de referência do layout (1920px).
// Tamanho e topo em vw acompanham a largura da tela; esquerda em % da
// seção. Enfeites ancorados por "baixo" não dependem da altura da seção.
// =========================================================================

// ------------------------------------------------------------------ HERO
// Formas laranja bem apagadas. Todas usam o mesmo padrão; cada item só
// diz o que muda.
// No celular, cada forma vai para um canto ou para a lateral da
// ilustração, em zigue-zague: alto à esquerda e à direita, meio, base.
const PADRAO_HERO = {
  cor: "var(--laranja)",
  opacidade: 0.1,
  noCelular: true,
};

export const ENFEITES_HERO = [
  {
    ...PADRAO_HERO,
    forma: "trevo-cinco-lados",
    tamanho: 220,
    topo: "5.2%",
    esquerda: "-1.2%",
    tamanhoMobile: "25.4vw",
    topoMobile: "4.6%",
    esquerdaMobile: "-8.1%",
    opacidade: 0.05,
  },
  {
    ...PADRAO_HERO,
    forma: "asterisco",
    tamanho: 400,
    topo: "-10%",
    direita: "-10%",
    tamanhoMobile: "44vw",
    topoMobile: "1.9%",
    direitaMobile: "-23.7%",
    opacidadeMobile: 0.05,
  },
  {
    ...PADRAO_HERO,
    forma: "estrela-cinco-lados",
    tamanho: 100,
    topo: "19.4%",
    esquerda: "39.7%",
    tamanhoMobile: "10vw",
    topoMobile: "33%",
    esquerdaMobile: "3%",
  },
  {
    ...PADRAO_HERO,
    forma: "trevo-cinco-lados",
    tamanho: 300,
    topo: "-2.7%",
    direita: "16.1%",
    tamanhoMobile: "18vw",
    topoMobile: "46.1%",
    direitaMobile: "-6.1%",
    opacidade: 0.05,
    giro: 14,
  },
  {
    ...PADRAO_HERO,
    forma: "estrela-cinco-lados",
    tamanho: 160,
    topo: "60%",
    direita: "10%",
    giro: 12.5,
    tamanhoMobile: "20vw",
    topoMobile: "84%",
    direitaMobile: "-5%",
  },
  {
    ...PADRAO_HERO,
    forma: "estrela-arredondada",
    tamanho: 400,
    topo: "51.7%",
    esquerda: "-4.9%",
    giro: 12.5,
    tamanhoMobile: "22vw",
    topoMobile: "70%",
    esquerdaMobile: "-7%",
    opacidade: 0.05,
    vazar: true,
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
    topo: "-0.5vw",
    esquerda: "14.4%",
    giro: -8,
    frente: true,
    noCelular: true,
    tamanhoMobile: "min(11vw, 52px)",
    esquerdaMobile: "14.8%",
    topoMobile: "3.6vw",
    vazar: true,
  },

  {
    forma: "celular1",
    recolorir: false,
    espelhar: false,
    espelharMobile: true,
    tamanho: "4vw",
    topo: "32.2%",
    esquerda: "6.4%",
    frente: true,
    noCelular: true,
    // O título da seção fica sempre na mesma altura, então aqui o vw
    // ganha um teto: em celulares largos o desenho não desce para o texto.
    tamanhoMobile: "min(11vw, 56px)",
    topoMobile: "22.1vw",
    esquerdaMobile: "78.6%",
  },

  {
    forma: "estrela",
    cor: "var(--bege)",
    tamanho: "2.7vw",
    topo: "0.5vw",
    esquerda: "27.9%",
    frente: true,
  },
  {
    forma: "estrela-arredondada",
    cor: "var(--branco-gelo)",
    tamanho: "7.1vw",
    topo: "2.5vw",
    esquerda: "71.6%",
    giro: 10,
    frente: true,
    noCelular: false,
    tamanhoMobile: "min(10vw, 48px)",
    topoMobile: "3.1vw",
    esquerdaMobile: "64.9%",
    vazarMobile: true,
  },

  // Formas roxas penduradas na onda.
  {
    forma: "trevo",
    cor: "var(--roxo)",
    tamanho: "8.3vw",
    topo: "2.3vw",
    esquerda: "83.1%",
    noCelular: true,
    tamanhoMobile: "min(14vw, 64px)",
    topoMobile: "2.8vw",
    esquerdaMobile: "71.5%",
  },
  {
    forma: "estrela-arredondada",
    cor: "var(--roxo)",
    tamanho: "6.6vw",
    topo: "6.1vw",
    esquerda: "9%",
    noCelular: false,
    tamanhoMobile: "min(12vw, 56px)",
    topoMobile: "1.2vw",
    esquerdaMobile: "1%",
  },
  {
    forma: "asterisco",
    cor: "var(--roxo)",
    tamanho: "14.5vw",
    topo: "10vw",
    esquerda: "93.3%",
    giro: 20,
    noCelular: false,
    // No celular passa para a esquerda, ao lado do título, e equilibra
    // o celular desenhado que fica do lado direito.
    tamanhoMobile: "8vw",
    topoMobile: "10.5vw",
    esquerdaMobile: "3.2%",
    vazarMobile: true,
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
    tamanho: "2vw",
    topo: "28.5%",
    esquerda: "3.7%",
  },
];

// Brilho preso no canto de baixo do vídeo. As medidas são relativas ao
// vídeo, não à seção.
export const BRILHO_VIDEO = {
  forma: "estrela",
  cor: "var(--roxo)",
  opacidade: 0.8,
  tamanho: "1.8vw",
  topo: "99%",
  esquerda: "99.8%",
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

// Flor lilás apagada que atravessa a emenda entre o "Sobre o Curso" e os
// Materiais Adicionais. Cada seção desenha a sua metade; a altura da
// caixa é 27vw × 326/343 = 25.66vw, então 19vw ficam acima da emenda e
// 6.66vw abaixo.
const FLOR_ONDA_MATERIAIS = {
  forma: "trevo-cinco-lados",
  cor: "var(--lilas-medio)",
  opacidade: 0.15,
  tamanho: "27vw",
  esquerda: "29.8%",
  giro: 36,
};

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
    tamanhoMobile: "15.1vw",
    topoMobile: "1.1vw",
    esquerdaMobile: "16.2%",
    giroMobile: 40,
  },
  {
    forma: "asterisco",
    cor: "var(--branco-gelo)",
    tamanho: "12.6vw",
    topo: "-2vw",
    esquerda: "73.8%",
    giro: 15,
  },

  // Grandes e apagadas, no fundo.
  {
    forma: "asterisco",
    cor: "var(--lilas-medio)",
    opacidade: 0.1,
    tamanho: "30vw",
    topo: "-4vw",
    esquerda: "31%",
  },
  {
    forma: "estrela-arredondada",
    cor: "var(--lilas-medio)",
    opacidade: 0.15,
    tamanho: "25.8vw",
    topo: "23.9vw",
    esquerda: "82.8%",
    giro: 8,
  },
  {
    forma: "asterisco",
    cor: "var(--lilas-medio)",
    opacidade: 0.15,
    tamanho: "32vw",
    topo: "22vw",
    esquerda: "-17%",
    giro: -10,
  },
  // Metade de cima da flor lilás que continua por cima da onda dos
  // Materiais Adicionais (FLOR_ONDA_MATERIAIS). Mesma forma, tamanho e
  // giro dos dois lados, para a emenda entre as seções não aparecer.
  {
    ...FLOR_ONDA_MATERIAIS,
    baixo: "-6.66vw",
  },

  // Destaques em roxo claro e branco.
  {
    forma: "estrela",
    cor: "var(--roxo-claro)",
    tamanho: "3.1vw",
    topo: "11.8vw",
    esquerda: "76.6%",
  },
  {
    forma: "trevo",
    cor: "var(--roxo-claro)",
    tamanho: "12.7vw",
    topo: "7.9vw",
    esquerda: "93.5%",
    noCelular: true,
    tamanhoMobile: "16vw",
    topoMobile: "17.8vw",
    esquerdaMobile: "89.8%",
  },
  {
    forma: "estrela-arredondada",
    cor: "var(--branco-gelo)",
    tamanho: "0.3vw",
    topo: "9.3vw",
    esquerda: "-2.4%",
    giro: 12,
    noCelular: true,
    tamanhoMobile: "8vw",
    topoMobile: "30.3vw",
    esquerdaMobile: "80.2%",
  },
  {
    forma: "estrela",
    cor: "var(--roxo-claro)",
    opacidade: 0.52,
    tamanho: "4vw",
    topo: "15.7vw",
    esquerda: "8.3%",
    // No celular desce para a faixa livre depois do último módulo, para
    // a seção não ter enfeite só no topo.
    noCelular: true,
    tamanhoMobile: "5vw",
    baixoMobile: "301.8vw",
    esquerdaMobile: "7.1%",
  },
  {
    forma: "estrela-arredondada",
    cor: "var(--roxo-claro)",
    tamanho: "0.3vw",
    topo: "18.5vw",
    esquerda: "-6.8%",
    noCelular: true,
    tamanhoMobile: "16vw",
    topoMobile: "7.1vh",
    esquerdaMobile: "-6.9%",
  },
  {
    forma: "trevo",
    cor: "var(--roxo-claro)",
    opacidade: 0.87,
    tamanho: "5.5vw",
    topo: "12.3vw",
    esquerda: "2.3%",
    // Par da estrelinha acima, do outro lado, na base da seção.
    noCelular: true,
    tamanhoMobile: "8vw",
    baixoMobile: "306.6vw",
    esquerdaMobile: "12%",
    giroMobile: 15,
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
// Referência: layout do Figma (print enviado em out/2026), medido a 1475px.
// Os enfeites do topo usam vw, para acompanhar a onda e o título; os mais
// para baixo usam topo em %, porque a altura da seção muda com a largura
// da tela e com o texto.
const APAGADA_MATERIAIS = {
  cor: "var(--pessego-apagado)",
  opacidade: 0.5,
};

export const ENFEITES_MATERIAIS = [
  // Grandes e bem apagadas, no fundo.
  // No celular, quatro delas descem pelas laterais das capas, alternando
  // os lados, para a parte de baixo da seção não ficar vazia.
  {
    ...APAGADA_MATERIAIS,
    forma: "estrela-cinco-lados",
    tamanho: "22vw",
    topo: "33%",
    esquerda: "-10%",
    giro: -15,
    noCelular: true,
    tamanhoMobile: "28vw",
    topoMobile: "38%",
    esquerdaMobile: "-9%",
    opacidadeMobile: 0.25,
  },
  {
    ...APAGADA_MATERIAIS,
    forma: "trevo-cinco-lados",
    tamanho: "19vw",
    topo: "35%",
    esquerda: "80.8%",
    noCelular: true,
    tamanhoMobile: "28vw",
    topoMobile: "54%",
    esquerdaMobile: "76%",
    opacidadeMobile: 0.25,
  },
  {
    ...APAGADA_MATERIAIS,
    forma: "estrela",
    tamanho: "9vw",
    topo: "51%",
    esquerda: "53%",
  },
  {
    ...APAGADA_MATERIAIS,
    forma: "trevo-cinco-lados",
    tamanho: "24vw",
    topo: "55%",
    esquerda: "-2%",
    giro: -8,
    opacidade: 0.3,
  },
  {
    ...APAGADA_MATERIAIS,
    forma: "asterisco",
    tamanho: "36vw",
    topo: "66.1%",
    esquerda: "34.8%",
    giro: 10,
    noCelular: true,
    tamanhoMobile: "30vw",
    topoMobile: "72%",
    esquerdaMobile: "-10%",
    camada: 1,
    vazar: true,
    opacidade: 0.3,
  },
  {
    ...APAGADA_MATERIAIS,
    forma: "trevo-cinco-lados",
    tamanho: "20vw",
    baixo: "0",
    esquerda: "72%",
    giro: 20,
    noCelular: true,
    tamanhoMobile: "26vw",
    baixoMobile: "2vw",
    esquerdaMobile: "74%",
    vazar: true,
    opacidade: 0.3,
    opacidadeMobile: 0.25,
  },

  // Por cima da onda lilás: a flor lilás apagada no meio e o asterisco
  // pêssego que sobe da faixa para dentro da onda.
  {
    ...FLOR_ONDA_MATERIAIS,
    topo: "-18.7vw",
    frente: true,
    opacidade: 0.1,
    esquerda: "28.7%",
  },
  // {
  //   forma: "asterisco",
  //   cor: "var(--pessego)",
  //   tamanho: "10vw",
  //   topo: "0.3vw",
  //   esquerda: "22.1%",
  //   frente: true,
  //   opacidade: 1,
  //   giro: 10,
  // },

  // Penduradas na onda lilás.
  // {
  //   forma: "estrela-arredondada",
  //   cor: "var(--lilas)",
  //   tamanho: "0.3vw",
  //   topo: "2.8vw",
  //   esquerda: "15.8%",
  //   giro: -10,
  // },
  {
    forma: "estrela-arredondada",
    cor: "var(--lilas)",
    tamanho: "16vw",
    topo: "-5.3vw",
    esquerda: "65.9%",
    giro: 6,
    noCelular: true,
    tamanhoMobile: "26vw",
  },

  // Destaques do lado esquerdo, em volta do título.
  {
    forma: "estrela",
    cor: "var(--lilas-forte)",
    opacidade: 0.65,
    tamanho: "3.4vw",
    topo: "8.8vw",
    esquerda: "3%",
  },
  {
    forma: "trevo-cinco-lados",
    cor: "var(--salmao)",
    tamanho: "6.7vw",
    topo: "12.1vw",
    esquerda: "9.2%",
    noCelular: true,
    tamanhoMobile: "10vw",
    topoMobile: "14vw",
    esquerdaMobile: "5%",
    giro: -18,
  },
  {
    forma: "asterisco",
    cor: "var(--vermelho)",
    tamanho: "18vw",
    topo: "16vw",
    esquerda: "-8.7%",
    giro: -17,
    noCelular: true,
    tamanhoMobile: "22vw",
    topoMobile: "30vw",
    esquerdaMobile: "-12%",
  },

  // Destaques do lado direito.
  // {
  //   forma: "trevo-cinco-lados",
  //   cor: "var(--lilas-forte)",
  //   tamanho: "9.7vw",
  //   topo: "12.6vw",
  //   esquerda: "58%",
  // },
  // {
  //   forma: "estrela-cinco-lados",
  //   cor: "var(--salmao-forte)",
  //   tamanho: "5.4vw",
  //   topo: "21.8vw",
  //   esquerda: "66.6%",
  //   giro: 10,
  // },
  {
    forma: "estrela",
    cor: "var(--lilas-forte)",
    opacidade: 0.65,
    tamanho: "3vw",
    topo: "12.3vw",
    esquerda: "77.9%",
  },
  {
    forma: "estrela-arredondada",
    cor: "var(--salmao)",
    tamanho: "6.5vw",
    topo: "7vw",
    esquerda: "85.6%",
    giro: 14,
    frente: true,
    noCelular: true,
    tamanhoMobile: "10vw",
    topoMobile: "24vw",
    esquerdaMobile: "84%",
  },
  {
    forma: "celular3",
    recolorir: false,
    tamanho: "7.1vw",
    topo: "15.7vw",
    esquerda: "80%",
    frente: true,
    noCelular: true,
    tamanhoMobile: "16vw",
    topoMobile: "30%",
    esquerdaMobile: "82%",
  },
  {
    forma: "asterisco",
    cor: "var(--lilas)",
    tamanho: "16vw",
    topo: "17vw",
    esquerda: "91.9%",
    giro: 8,
    // Fica só no desktop: no celular encavalava com a estrela salmão e
    // o celular desenhado, e o lado direito já tem peso suficiente.
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
    topo: "1.6vw",
    // O centro precisa ficar dentro da tela, senão a forma nunca brota.
    esquerda: "-6%",
    giro: 12,
    noCelular: true,
    tamanhoMobile: "22vw",
    esquerdaMobile: "-8%",
  },

  {
    forma: "celular2",
    recolorir: false,
    tamanho: "5.5vw",
    topo: "13.3vw",
    esquerda: "11.2%",
    frente: true,
    noCelular: true,
    tamanhoMobile: "16vw",
    // Em px, e não em %: o FAQ cresce quando uma pergunta abre, e o %
    // da altura da seção fazia o celular subir e descer junto.
    topoMobile: "100px",
    esquerdaMobile: "3.5%",
  },

  {
    forma: "trevo-cinco-lados",
    cor: "var(--lilas-medio)",
    tamanho: "3.3vw",
    topo: "9.7vw",
    esquerda: "20.6%",
    noCelular: true,
    tamanhoMobile: "10vw",
    topoMobile: "13.8vw",
    esquerdaMobile: "17.5%",
  },
  {
    forma: "estrela",
    cor: "var(--pessego-claro)",
    tamanho: "3.7vw",
    topo: "17.8vw",
    esquerda: "2.3%",
  },

  // Topo, à direita.
  {
    forma: "estrela",
    cor: "var(--lilas-claro)",
    tamanho: "3.1vw",
    topo: "8.4vw",
    esquerda: "74.6%",
    // No celular faz par com o trevo do outro lado.
    noCelular: true,
    tamanhoMobile: "7vw",
    topoMobile: "12vw",
    esquerdaMobile: "76.9%",
  },
  {
    forma: "trevo-cinco-lados",
    cor: "var(--lilas-medio)",
    tamanho: "6.8vw",
    topo: "6vw",
    esquerda: "84.4%",
    giro: -15,
    opacidade: 0.8,
  },
  {
    forma: "estrela-cinco-lados",
    cor: "var(--pessego-claro)",
    tamanho: "5vw",
    topo: "14.6vw",
    esquerda: "83.1%",
    giro: -8,
  },
  {
    forma: "estrela-arredondada",
    cor: "var(--roxo-medio)",
    tamanho: "14.4vw",
    topo: "12.7vw",
    esquerda: "94.8%",
    giro: 10,
    noCelular: true,
    tamanhoMobile: "20vw",
    esquerdaMobile: "88%",
  },

  // Base.
  {
    forma: "trevo-cinco-lados",
    cor: "var(--lilas-medio)",
    tamanho: "2.8vw",
    baixo: "3.4vw",
    esquerda: "1.2%",
    noCelular: true,
    tamanhoMobile: "9vw",
    baixoMobile: "3.8vw",
    esquerdaMobile: "2.3%",
  },
  {
    forma: "estrela",
    cor: "var(--lilas-medio)",
    tamanho: "1.6vw",
    baixo: "1.3vw",
    esquerda: "4.3%",
  },
  {
    forma: "estrela",
    cor: "var(--lilas-medio)",
    tamanho: "2.3vw",
    baixo: "7.3vw",
    esquerda: "94%",
  },
  {
    forma: "estrela",
    cor: "var(--lilas-medio)",
    tamanho: "4.4vw",
    baixo: "1.8vw",
    esquerda: "89.6%",
    noCelular: true,
    tamanhoMobile: "6vw",
    baixoMobile: "4.1vw",
    esquerdaMobile: "91.4%",
  },

  // Cantos de baixo, em roxo, meio escondidos pelo fim da seção.
  // {
  //   forma: "asterisco",
  //   cor: "var(--roxo)",
  //   tamanho: "0.3vw",
  //   baixo: "-0.7vw",
  //   esquerda: "2.9%",
  //   giro: -8,
  //   noCelular: true,
  //   tamanhoMobile: "0.9vw",
  //   baixoMobile: "1.2vw",
  //   esquerdaMobile: "5.9%",
  // },
  // {
  //   forma: "estrela-arredondada",
  //   cor: "var(--roxo)",
  //   tamanho: "0.3vw",
  //   baixo: "1.1vw",
  //   esquerda: "95.9%",
  //   giro: 14,
  //   noCelular: false,
  //   tamanhoMobile: "0.9vw",
  //   esquerdaMobile: "93.1%",
  //   baixoMobile: "3.7vw",
  // },
];
