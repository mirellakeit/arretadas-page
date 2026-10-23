// =========================================================================
// ALINHAR O PAPEL
//
// A textura de papel das seções (TexturaPapel.astro) e a das ondas
// (Faixa.astro, prop papel) são a mesma imagem, "colada" na página e não
// em cada pedaço. Este script diz a cada camada de papel a que altura da
// página ela começa (--papel-y). O CSS desloca a imagem nesse tanto, e a
// textura de uma seção continua sem emenda na onda da seção de baixo.
//
// Sem JavaScript tudo continua funcionando: cada camada só começa a
// imagem do próprio topo, e a emenda pode aparecer de leve.
// =========================================================================

const SELETOR = ".textura-papel, .papel-onda";

function alinhar() {
  const y0 = window.scrollY;
  document.querySelectorAll(SELETOR).forEach((el) => {
    const topo = el.getBoundingClientRect().top + y0;
    el.style.setProperty("--papel-y", `${Math.round(topo * 100) / 100}px`);
  });
}

let espera;
const realinhar = () => {
  cancelAnimationFrame(espera);
  espera = requestAnimationFrame(alinhar);
};

alinhar();
addEventListener("load", alinhar);
addEventListener("resize", realinhar);
document.fonts?.ready.then(alinhar);
// Seções que mudam de altura (FAQ abrindo, cartões do curso) empurram as
// de baixo: realinha.
const ro = new ResizeObserver(realinhar);
document.querySelectorAll("main > *, header").forEach((s) => ro.observe(s));
