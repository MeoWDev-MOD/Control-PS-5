// Página do Control PS-5: anúncios do CRM, tema, efeitos, o controle ao vivo e os modelos 3D (carregados só quando vão aparecer).
import { initUI, themeSwitch } from "./ui.js";
import { mountAdPairs, mountSideAds } from "./banners.js";
import { mountConsent } from "./consent.js";
import { startShader } from "./shader.js";
import { initPageFx } from "./pagefx.js";
import { initFx } from "./fx.js";

const $ = (id) => document.getElementById(id);
const root = document.documentElement;
const calmo = matchMedia("(prefers-reduced-motion: reduce)").matches;
const economia = navigator.connection?.saveData === true;
const pequena = matchMedia("(max-width: 980px)").matches;

const isDark = () => (root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches);

initUI();
mountConsent();
// A pedido do dono, sem encher de anúncio: dois deitados, depois dos recursos e das perguntas, e um em pé, à esquerda do topo,
// só em tela com margem livre para ele. Sem anúncio marcado no CRM, ficam escondidos.
mountAdPairs(["Recursos", "Faq"].map((n) => [$(`adSlot${n}`), $(`adMedia${n}`)]), "control-site");
mountSideAds([[$("adTopo"), $("adTopoMedia")]], "control-site-lado", "(min-width: 1440px) and (min-height: 640px)");

// O anúncio em pé começa inteiro e, ao descer a página, vai encolhendo até a metade, preso no alto da tela. A arte nunca é cortada
// e não fica com menos de 110 px de largura, porque aí não dá para ler. O selo "Publicidade" mantém o tamanho.
const adTopo = $("adTopo"), adTopoTag = adTopo.querySelector(".adtag");
const encolheAdTopo = () => {
  const largura = adTopo.offsetWidth;
  if (!largura) return; // tela estreita ou sem anúncio
  const menor = Math.min(1, Math.max(0.5, 110 / largura));
  const andou = calmo ? (scrollY > 120 ? 1 : 0) : Math.min(scrollY / 480, 1);
  const s = 1 - (1 - menor) * andou;
  adTopo.style.transform = `scale(${s})`;
  adTopoTag.style.transform = `scale(${1 / s})`;
};
addEventListener("scroll", encolheAdTopo, { passive: true });
new ResizeObserver(encolheAdTopo).observe(adTopo); // também roda quando o anúncio aparece e quando a janela muda de tamanho

$("themeBtn").onclick = (e) => themeSwitch(e, () => {
  const next = isDark() ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("ctl.theme", next); } catch { /* modo privado */ }
});

startShader($("fxBg"), isDark).start();
initPageFx(new URL("../img/logo-gato-control-ps5.webp", import.meta.url).href); // vale também nas páginas de en/, es/ e ru/
initFx();

// Barra de baixo no celular: aparece quando os botões principais saem da tela.
const barra = $("mDl");
if (barra) new IntersectionObserver(([e]) => barra.classList.toggle("on", !e.isIntersecting && e.boundingClientRect.top < 0)).observe(document.querySelector(".hero .cta"));

// ---------- controle ao vivo: as cores e os efeitos são os do app ----------
const CORES = [
  ["Azul", "#0040FF"], ["Ciano", "#00E5FF"], ["Verde-água", "#4EDEA3"], ["Verde", "#00FF50"],
  ["Lima", "#A0FF00"], ["Amarelo", "#FFD000"], ["Laranja", "#FF6A00"], ["Vermelho", "#FF1030"],
  ["Rosa", "#FF2E88"], ["Violeta", "#9B30FF"], ["Índigo", "#5A2BFF"], ["Branco", "#FFFFFF"],
];
// Onde o gatilho resiste, em 10 trechos do curso (como na tela Gatilhos do app).
const EFEITOS = [
  ["Sem efeito", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  ["Acelerador", [0, 0, 0, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55]],
  ["Freio firme", [0, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.95]],
  ["Gatilho de arma", [0, 0, 0.8, 0.8, 0.8, 0.8, 0, 0, 0, 0]],
  ["Arco", [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 0, 0, 0]],
  ["Metralhadora", [0, 0.9, 0.35, 0.9, 0.35, 0.9, 0.35, 0.9, 0.35, 0.9]],
  ["Motor vibrando", [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4]],
];
// Nomes no idioma da página (<html lang>; as páginas en/, es/ e ru/ saem de site-src/i18n).
const LANG = (document.documentElement.lang || "pt").slice(0, 2).toLowerCase();
const NOMES = {"en": {"Azul": "Blue", "Ciano": "Cyan", "Verde-água": "Aqua green", "Verde": "Green", "Lima": "Lime", "Amarelo": "Yellow", "Laranja": "Orange", "Vermelho": "Red", "Rosa": "Pink", "Violeta": "Violet", "Índigo": "Indigo", "Branco": "White", "Sem efeito": "No effect", "Acelerador": "Accelerator", "Freio firme": "Firm brake", "Gatilho de arma": "Gun trigger", "Arco": "Bow", "Metralhadora": "Machine gun", "Motor vibrando": "Engine rumble", "Chave copiada. No app do seu banco: Pix, Pagar com chave, e cole.": "Key copied. In your bank app: Pix, Pay with key, and paste it.", "Copie a chave: ": "Copy the key: "}, "es": {"Azul": "Azul", "Ciano": "Cian", "Verde-água": "Verde agua", "Verde": "Verde", "Lima": "Lima", "Amarelo": "Amarillo", "Laranja": "Naranja", "Vermelho": "Rojo", "Rosa": "Rosa", "Violeta": "Violeta", "Índigo": "Índigo", "Branco": "Blanco", "Sem efeito": "Sin efecto", "Acelerador": "Acelerador", "Freio firme": "Freno firme", "Gatilho de arma": "Gatillo de arma", "Arco": "Arco", "Metralhadora": "Ametralladora", "Motor vibrando": "Motor vibrando", "Chave copiada. No app do seu banco: Pix, Pagar com chave, e cole.": "Clave copiada. En la app de tu banco (Brasil): Pix, Pagar con clave, y pégala.", "Copie a chave: ": "Copia la clave: "}, "ru": {"Azul": "Синий", "Ciano": "Голубой", "Verde-água": "Бирюзовый", "Verde": "Зелёный", "Lima": "Лаймовый", "Amarelo": "Жёлтый", "Laranja": "Оранжевый", "Vermelho": "Красный", "Rosa": "Розовый", "Violeta": "Фиолетовый", "Índigo": "Индиго", "Branco": "Белый", "Sem efeito": "Без эффекта", "Acelerador": "Газ", "Freio firme": "Жёсткий тормоз", "Gatilho de arma": "Спуск оружия", "Arco": "Лук", "Metralhadora": "Пулемёт", "Motor vibrando": "Вибрация мотора", "Chave copiada. No app do seu banco: Pix, Pagar com chave, e cole.": "Ключ скопирован. В приложении банка (Бразилия): Pix, оплата по ключу — вставьте его.", "Copie a chave: ": "Скопируйте ключ: "}};
const tr = (t) => NOMES[LANG]?.[t] ?? t;
CORES.forEach((c) => { c[0] = tr(c[0]); });
EFEITOS.forEach((e) => { e[0] = tr(e[0]); });
let hero = null;
const curso = $("curso");
const barras = Array.from({ length: 10 }, () => curso.appendChild(document.createElement("span")));
const desenhaCurso = (z) => barras.forEach((b, i) => {
  b.style.height = `${8 + z[i] * 92}%`;
  b.classList.toggle("on", z[i] > 0);
});
const marca = (caixa, botao) => caixa.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b === botao)));

CORES.forEach(([nome, cor], i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "cor";
  b.style.setProperty("--c", cor);
  b.setAttribute("aria-label", nome);
  b.setAttribute("aria-pressed", String(i === 0));
  b.title = nome;
  b.onclick = () => { marca($("cores"), b); hero?.setCor(cor); };
  $("cores").appendChild(b);
});
EFEITOS.forEach(([nome, z], i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "efeito";
  b.textContent = nome;
  b.setAttribute("aria-pressed", String(i === 3));
  b.onclick = () => { marca($("efeitos"), b); desenhaCurso(z); hero?.setEfeito(nome); };
  $("efeitos").appendChild(b);
});
desenhaCurso(EFEITOS[3][1]);

// ---------- Pix e telas ampliadas ----------
const pix = $("pixBtn");
pix.onclick = async () => {
  try { await navigator.clipboard.writeText(pix.dataset.chave); $("pixOk").textContent = tr("Chave copiada. No app do seu banco: Pix, Pagar com chave, e cole."); }
  catch { $("pixOk").textContent = tr("Copie a chave: ") + pix.dataset.chave; }
};
const grande = $("telaGrande");
$("galeria").addEventListener("click", (e) => {
  const im = e.target.closest(".zoom")?.querySelector("img");
  if (!im) return;
  $("telaGrandeImg").src = im.src;
  $("telaGrandeImg").alt = im.alt;
  grande.showModal();
});
grande.addEventListener("click", (e) => { if (e.target === grande) grande.close(); });

// ---------- 3D ----------
let modulo3d = null;
const carrega3d = () => (modulo3d ??= import("./cena3d.js"));
const quandoOcioso = (fn) => ("requestIdleCallback" in window ? requestIdleCallback(fn, { timeout: 2500 }) : setTimeout(fn, 900));

async function ligaHero() {
  const canvas = $("hero3d");
  if (economia || !canvas) { $("aoVivo").classList.add("hidden"); return; }
  try {
    const m = await carrega3d();
    if (!m.has3D()) { $("aoVivo").classList.add("hidden"); return; }
    hero = await m.initHero(canvas, { pequena, onReady: () => $("heroStage").classList.add("pronto") });
    hero.cena.estado.efeito = EFEITOS[3][0];
    window.__hero = hero;
  } catch (e) { console.warn("3D do hero indisponível", e); $("aoVivo").classList.add("hidden"); }
}

// Rolagem dentro da seção vira s de 0 a 5 (um trecho para cada passo).
function ligaStory() {
  const secao = $("montagem"), canvas = $("story3d");
  if (!secao || !canvas) return;
  const passos = [...secao.querySelectorAll(".passo")];
  const semGl = () => secao.classList.add("nogl");
  let cena = null;
  const calcula = () => {
    const meio = innerHeight * (pequena ? 0.72 : 0.5);
    // Os cartões têm alturas diferentes: cada passo acerta o trecho dele quando o cartão chega ao meio da tela.
    const c = passos.map((el) => { const r = el.getBoundingClientRect(); return r.top + r.height / 2; });
    let s = 0;
    if (meio >= c[c.length - 1]) s = c.length - 1;
    else if (meio > c[0]) { let i = 0; while (meio >= c[i + 1]) i++; s = i + (meio - c[i]) / (c[i + 1] - c[i]); }
    const atual = Math.round(s);
    passos.forEach((el, i) => el.classList.toggle("on", atual === i));
    // Com menos movimento, para em cada passo em vez de acompanhar a rolagem.
    cena?.ir(calmo ? atual : s);
  };
  addEventListener("scroll", calcula, { passive: true });
  addEventListener("resize", calcula, { passive: true });
  calcula();
  if (economia) { semGl(); return; }
  const io = new IntersectionObserver(async ([e]) => {
    if (!e.isIntersecting) return;
    io.disconnect();
    try {
      const m = await carrega3d();
      if (!m.has3D()) { semGl(); return; }
      cena = await m.initStory(canvas, $("rotulos3d"), { pequena });
      window.__story = cena;
      $("storyStage").classList.add("pronto");
      calcula();
    } catch (err) { console.warn("3D do passo a passo indisponível", err); semGl(); }
  }, { rootMargin: "900px" });
  io.observe(secao);
}

quandoOcioso(ligaHero);
ligaStory();
