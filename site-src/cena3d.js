// Modelos 3D da página: o Nintendo Switch e o controle de PS5 se conectando.
// O controle é montado a partir do desenho usado no próprio app (dualsense.json, medido por tracar_controle.py),
// e a tela do Switch mostra as capturas reais do app. Sem logo da Nintendo nem da Sony.
// Gerar o arquivo final: ver site-src/LEIA-ME.md.
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { toCreasedNormals } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import DS from "./dualsense.json";

const IMG = new URL("../img/", import.meta.url).href;
const PI = Math.PI;
const cl = (x) => Math.max(0, Math.min(1, x));
const sm = (a, b, x) => { const t = cl((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const mix = (a, b, t) => a + (b - a) * t;
const gauss = (x, y, cx, cy, r) => Math.exp(-((x - cx) ** 2 + (y - cy) ** 2) / (2 * r * r));

// 1 unidade = 5 cm. O controle tem 16 cm; o Switch com os Joy-Con, 23,9 x 10,2 x 1,4 cm.
const U = 3.2 / DS.w, CX = 440, CY = 400;
const dx = (x) => (x - CX) * U, dy = (y) => -(y - CY) * U;
const EPS = 0.034;

// As mesmas 12 cores do app (tela Luzes e vibração).
export const CORES = [
  ["Azul", "#0040FF"], ["Ciano", "#00E5FF"], ["Verde-água", "#4EDEA3"], ["Verde", "#00FF50"],
  ["Lima", "#A0FF00"], ["Amarelo", "#FFD000"], ["Laranja", "#FF6A00"], ["Vermelho", "#FF1030"],
  ["Rosa", "#FF2E88"], ["Violeta", "#9B30FF"], ["Índigo", "#5A2BFF"], ["Branco", "#FFFFFF"],
];

// Capturas reais do app, na ordem do tutorial.
const TELAS = {
  homebrew: "menu-homebrew-com-control-ps5-no-nintendo-switch.webp",
  instalar: "app-control-ps5-instalar-driver-dualsense.webp",
  instalando: "instalando-driver-dualsense-no-switch.webp",
  reiniciar: "driver-instalado-reiniciar-o-switch.webp",
  parear: "driver-ativo-parear-controle-ps5.webp",
  controles: "tela-controles-do-nintendo-switch-mudar-ordem.webp",
  sincronizar: "aperte-l-e-r-para-sincronizar-controle-ps5-no-switch.webp",
  conectado: "dualsense-conectado-no-nintendo-switch.webp",
  gatilhos: "gatilhos-adaptaveis-do-dualsense-no-switch.webp",
  luzes: "barra-de-luz-e-vibracao-do-dualsense-no-switch.webp",
};

// Curso do gatilho R2 em cada efeito pronto do app: u é a volta do dedo (0 a 1), t é o tempo.
const seno2 = (u) => Math.sin(PI * u) ** 2;
export const EFEITOS = {
  "Sem efeito": (u) => seno2(u),
  "Acelerador": (u) => { const x = seno2(u); return x < 0.3 ? x : 0.3 + (x - 0.3) * 0.55; },
  "Freio firme": (u) => seno2(u) * 0.42,
  "Gatilho de arma": (u) => { const x = seno2(u); return x < 0.62 ? x * 0.62 : mix(0.38, 1, sm(0.62, 0.68, x)); },
  "Arco": (u) => (u < 0.82 ? Math.pow(u / 0.82, 1.5) * 0.86 : 0.86 * (1 - sm(0.82, 0.87, u))),
  "Metralhadora": (u, t) => 0.56 + (Math.sin(t * 46) > 0 ? 0.13 : -0.13),
  "Motor vibrando": (u, t) => 0.36 + 0.035 * Math.sin(t * 90),
};

export function has3D() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch { return false; }
}

function base(canvas, dpr) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, dpr));
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 0.92;
  const scene = new THREE.Scene();
  const pm = new THREE.PMREMGenerator(renderer);
  scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
  pm.dispose();
  const luz = new THREE.DirectionalLight(0xffffff, 1.5);
  luz.position.set(-3, 6, 7);
  const contra = new THREE.DirectionalLight(0xb9a4ff, 0.9);
  contra.position.set(5, 2, -3);
  scene.add(luz, contra);
  return { renderer, scene };
}

function telaDeCanvas(renderer, w, h, desenho, cor = true) {
  const c = document.createElement("canvas");
  c.width = w; c.height = h;
  desenho(c.getContext("2d"), w, h);
  const t = new THREE.CanvasTexture(c);
  if (cor) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return t;
}

// ---------- contornos do controle ----------
function suaviza(p, n = 1) {
  for (let k = 0; k < n; k++) {
    const q = [];
    p.forEach((a, i) => {
      const b = p[(i + 1) % p.length];
      q.push([a[0] * 0.75 + b[0] * 0.25, a[1] * 0.75 + b[1] * 0.25], [a[0] * 0.25 + b[0] * 0.75, a[1] * 0.25 + b[1] * 0.75]);
    });
    p = q;
  }
  return p;
}
const PECA = Object.fromEntries(Object.entries(DS.pecas).map(([k, v]) => [k, suaviza(v.p, 1)]));
const meioDe = (pol) => {
  const xs = pol.map((p) => p[0]), ys = pol.map((p) => p[1]);
  return [(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...ys) + Math.max(...ys)) / 2];
};
function caminho(x, pol) {
  x.beginPath();
  pol.forEach(([a, b], i) => (i ? x.lineTo(a, b) : x.moveTo(a, b)));
  x.closePath();
}
function formaDe(pol, ox, oy, k = 1) {
  const s = new THREE.Shape();
  pol.forEach(([x, y], i) => {
    const X = (x - ox) * U * k, Y = -(y - oy) * U * k;
    if (i) s.lineTo(X, Y); else s.moveTo(X, Y);
  });
  s.closePath();
  return s;
}
function extrude(forma, { depth = 0.03, bevel = 0.012, seg = 3 } = {}) {
  const g = new THREE.ExtrudeGeometry(forma, { depth, bevelEnabled: bevel > 0, bevelSize: bevel, bevelThickness: bevel, bevelSegments: seg, bevelOffset: -bevel, curveSegments: 4 });
  return toCreasedNormals(g, 0.75);
}

function mascara(pols, nx, ny) {
  const c = document.createElement("canvas");
  c.width = nx; c.height = ny;
  const x = c.getContext("2d", { willReadFrequently: true });
  x.scale(nx / DS.w, ny / DS.h);
  x.fillStyle = "#fff";
  pols.forEach((p) => { caminho(x, p); x.fill(); });
  const d = x.getImageData(0, 0, nx, ny).data, m = new Float32Array(nx * ny);
  for (let i = 0; i < m.length; i++) m[i] = d[i * 4 + 3] / 255;
  return m;
}
function desfoca(m, w, h, r) {
  const a = new Float32Array(m.length);
  for (let v = 0; v < 2; v++) {
    for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
      let s = 0, n = 0;
      for (let k = -r; k <= r; k++) {
        const c = v ? j + k : i + k;
        if (c < 0 || c >= (v ? h : w)) continue;
        s += m[v ? c * w + i : j * w + c]; n++;
      }
      a[j * w + i] = s / n;
    }
    m.set(a);
  }
  return m;
}
// Distância até a borda, em células (duas varreduras).
function distancia(m, w, h) {
  const d = new Float32Array(w * h);
  for (let i = 0; i < d.length; i++) d[i] = m[i] > 0.5 ? 1e6 : 0;
  const D = 1.414;
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
    const k = j * w + i;
    if (!d[k]) continue;
    if (i) d[k] = Math.min(d[k], d[k - 1] + 1);
    if (j) d[k] = Math.min(d[k], d[k - w] + 1);
    if (i && j) d[k] = Math.min(d[k], d[k - w - 1] + D);
    if (j && i < w - 1) d[k] = Math.min(d[k], d[k - w + 1] + D);
  }
  for (let j = h - 1; j >= 0; j--) for (let i = w - 1; i >= 0; i--) {
    const k = j * w + i;
    if (!d[k]) continue;
    if (i < w - 1) d[k] = Math.min(d[k], d[k + 1] + 1);
    if (j < h - 1) d[k] = Math.min(d[k], d[k + w] + 1);
    if (i < w - 1 && j < h - 1) d[k] = Math.min(d[k], d[k + w + 1] + D);
    if (j < h - 1 && i) d[k] = Math.min(d[k], d[k + w - 1] + D);
  }
  return d;
}

// ---------- DualSense ----------
function criaControle(renderer, { pequena }) {
  const W = DS.w, H = DS.h;
  const GW = pequena ? 150 : 236, GH = Math.round((GW * H) / W), nx = GW + 1, ny = GH + 1, celX = W / GW, celY = H / GH;
  const mCorpo = mascara([PECA.corpo], nx, ny);
  const dist = distancia(mCorpo, nx, ny);
  const r = pequena ? 1 : 2;
  const mCentro = desfoca(mascara([PECA.centro], nx, ny), nx, ny, r);
  const mTouch = desfoca(mascara([PECA.moldura], nx, ny), nx, ny, r);
  const mOmbro = desfoca(mascara([PECA.l1, PECA.r1], nx, ny), nx, ny, r);
  const zF = new Float32Array(nx * ny), zB = new Float32Array(nx * ny);
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const k = j * nx + i, xp = i * celX, yp = j * celY, D = dist[k] * celX;
    const t = cl((D - celX * 1.7) / 74), p = 1 - Math.pow(1 - t, 2.6);
    const queda = 1 - 0.38 * sm(330, 690, yp);
    let f = EPS + (0.205 - EPS) * p * queda;
    f += p * (0.034 * gauss(xp, yp, 118, 300, 105) + 0.034 * gauss(xp, yp, 762, 300, 105));
    f -= p * (0.03 * mCentro[k] + 0.016 * mTouch[k] + 0.045 * mOmbro[k]);
    f -= p * (0.022 * gauss(xp, yp, 284, 405, 44) + 0.022 * gauss(xp, yp, 593, 405, 44) + 0.012 * gauss(xp, yp, 152, 285, 56) + 0.012 * gauss(xp, yp, 723, 283, 64));
    zF[k] = Math.max(EPS, f);
    const tb = cl((D - celX * 1.7) / 120), pb = 1 - Math.pow(1 - tb, 2.6);
    const pega = 0.55 + 0.45 * sm(100, 270, Math.abs(xp - CX)) * sm(210, 430, yp);
    zB[k] = Math.max(EPS, EPS + (0.5 - EPS) * pb * pega);
  }
  // Altura da superfície em um ponto do desenho: é onde cada botão fica apoiado.
  const sup = (xp, yp) => {
    const a = cl(xp / W) * GW, b = cl(yp / H) * GH, i = Math.min(GW - 1, a | 0), j = Math.min(GH - 1, b | 0), u = a - i, v = b - j;
    const q = (ii, jj) => zF[jj * nx + ii];
    return mix(mix(q(i, j), q(i + 1, j), u), mix(q(i, j + 1), q(i + 1, j + 1), u), v);
  };

  // Malha da casca: só as células perto do corpo. A borda exata vem da transparência da textura.
  const perto = new Uint8Array(nx * ny);
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    if (mCorpo[j * nx + i] <= 0) continue;
    for (let b = -1; b <= 1; b++) for (let a = -1; a <= 1; a++) {
      const c = i + a, e = j + b;
      if (c >= 0 && c < nx && e >= 0 && e < ny) perto[e * nx + c] = 1;
    }
  }
  const ids = new Int32Array(nx * ny).fill(-1), pos = [], uv = [], zb = [];
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const k = j * nx + i;
    if (!perto[k]) continue;
    ids[k] = pos.length / 3;
    const xp = i * celX, yp = j * celY;
    pos.push(dx(xp), dy(yp), zF[k]);
    uv.push(xp / W, 1 - yp / H);
    zb.push(zB[k]);
  }
  const fr = [], tr = [];
  for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
    const a = ids[j * nx + i], b = ids[j * nx + i + 1], c = ids[(j + 1) * nx + i], d = ids[(j + 1) * nx + i + 1];
    if (a < 0 || b < 0 || c < 0 || d < 0) continue;
    fr.push(a, c, b, b, c, d);
    tr.push(a, b, c, b, d, c);
  }
  const geoF = new THREE.BufferGeometry();
  geoF.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geoF.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geoF.setIndex(fr);
  geoF.computeVertexNormals();
  const pos2 = pos.slice();
  for (let i = 0; i < zb.length; i++) pos2[i * 3 + 2] = -zb[i];
  const geoB = new THREE.BufferGeometry();
  geoB.setAttribute("position", new THREE.Float32BufferAttribute(pos2, 3));
  geoB.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geoB.setIndex(tr);
  geoB.computeVertexNormals();

  // Pintura da frente: asas brancas, centro preto, frestas em volta dos botões.
  const TW = pequena ? 1100 : 1760, TH = Math.round((TW * H) / W);
  const ESCURO = "#101014";
  const mapa = telaDeCanvas(renderer, TW, TH, (x) => {
    x.scale(TW / W, TH / H);
    caminho(x, PECA.corpo); x.fillStyle = ESCURO; x.fill();
    x.save();
    caminho(x, PECA.corpo); x.clip();
    const branco = x.createLinearGradient(0, 130, 0, 700);
    branco.addColorStop(0, "#f7f5fa"); branco.addColorStop(1, "#e6e3ec");
    x.fillStyle = branco; x.strokeStyle = branco; x.lineWidth = 16; x.lineJoin = "round";
    [PECA.asaE, PECA.asaD].forEach((p) => { caminho(x, p); x.fill(); x.stroke(); });
    x.fillStyle = ESCURO; x.strokeStyle = ESCURO; x.lineWidth = 5;
    [PECA.centro, PECA.moldura].forEach((p) => { caminho(x, p); x.fill(); x.stroke(); });
    x.strokeStyle = "#08080b"; x.lineWidth = 2;
    caminho(x, PECA.centro); x.stroke();
    x.restore();
    // frestas embaixo dos botões
    x.fillStyle = "#07070a"; x.strokeStyle = "#07070a"; x.lineWidth = 5;
    ["dpadU", "dpadD", "dpadL", "dpadR", "tri", "cir", "x", "qua", "create", "options", "ps", "mute", "touch", "l1", "r1"].forEach((n) => { caminho(x, PECA[n]); x.fill(); x.stroke(); });
    // poços dos analógicos
    ["stickL", "stickR"].forEach((n) => { caminho(x, PECA[n]); x.fillStyle = "#0a0a0e"; x.fill(); x.strokeStyle = "#2c2c35"; x.lineWidth = 3; x.stroke(); });
    // saída de som e microfone: furinhos dos dois lados do botão central
    x.fillStyle = "#34343e";
    for (const lado of [-1, 1]) for (let a = 0; a < 9; a++) for (let b = 0; b < 3; b++) {
      x.beginPath(); x.arc(438 + lado * (40 + a * 7 + (b % 2) * 3.5), 394 + b * 7, 1.5, 0, 7); x.fill();
    }
  });
  const emissivo = telaDeCanvas(renderer, TW, TH, (x) => {
    x.fillStyle = "#000"; x.fillRect(0, 0, TW, TH);
    x.scale(TW / W, TH / H);
    x.fillStyle = "#fff";
    caminho(x, PECA.moldura); x.fill();
    x.fillStyle = "#000"; x.strokeStyle = "#000"; x.lineWidth = 3;
    caminho(x, PECA.touch); x.fill(); x.stroke();
    x.fillRect(0, 0, W, 170);
    x.fillRect(310, 298, 260, 60);
  }, false);
  const mFrente = new THREE.MeshStandardMaterial({ map: mapa, alphaTest: 0.5, alphaToCoverage: true, roughness: 0.46, metalness: 0, emissive: new THREE.Color(0x0040ff), emissiveMap: emissivo, emissiveIntensity: 0 });
  const mapaTras = telaDeCanvas(renderer, 900, Math.round((900 * H) / W), (x, a, b) => {
    x.scale(a / W, b / H);
    caminho(x, PECA.corpo); x.fillStyle = "#121217"; x.fill();
  });
  const mTras = new THREE.MeshStandardMaterial({ map: mapaTras, alphaTest: 0.5, alphaToCoverage: true, roughness: 0.62 });

  const g = new THREE.Group();
  g.add(new THREE.Mesh(geoF, mFrente), new THREE.Mesh(geoB, mTras));
  const nucleo = new THREE.ExtrudeGeometry(formaDe(PECA.corpo, CX, CY), { depth: EPS * 2, bevelEnabled: false });
  nucleo.translate(0, 0, -EPS);
  g.add(new THREE.Mesh(nucleo, new THREE.MeshStandardMaterial({ color: 0x0c0c10, roughness: 0.6 })));

  // Peças por cima da casca
  const preto = () => new THREE.MeshStandardMaterial({ color: 0x1b1b22, roughness: 0.34, metalness: 0.05, emissive: 0xffb01f, emissiveIntensity: 0 });
  const peca = (nome, op, mat, sobe = 0) => {
    const pol = PECA[nome], [cx, cy] = meioDe(pol);
    const m = new THREE.Mesh(extrude(formaDe(pol, cx, cy), op), mat);
    m.position.set(dx(cx), dy(cy), sup(cx, cy) + sobe);
    m.userData.z0 = m.position.z;
    g.add(m);
    return m;
  };
  const dpadMat = preto();
  ["dpadU", "dpadD", "dpadL", "dpadR"].forEach((n) => peca(n, { depth: 0.022, bevel: 0.012 }, dpadMat, -0.004));

  // △ ○ × □
  const simbolo = (tipo) => telaDeCanvas(renderer, 128, 128, (x) => {
    x.strokeStyle = "#d9d9e6"; x.lineWidth = 8; x.lineCap = "round"; x.lineJoin = "round";
    x.beginPath();
    if (tipo === "tri") { x.moveTo(64, 26); x.lineTo(103, 94); x.lineTo(25, 94); x.closePath(); }
    if (tipo === "cir") x.arc(64, 64, 36, 0, 7);
    if (tipo === "x") { x.moveTo(32, 32); x.lineTo(96, 96); x.moveTo(96, 32); x.lineTo(32, 96); }
    if (tipo === "qua") x.rect(30, 30, 68, 68);
    x.stroke();
  });
  const faceMat = preto();
  ["tri", "cir", "x", "qua"].forEach((n) => {
    const m = peca(n, { depth: 0.024, bevel: 0.013 }, faceMat, -0.004);
    const s = new THREE.Mesh(new THREE.PlaneGeometry(0.135, 0.135), new THREE.MeshBasicMaterial({ map: simbolo(n), transparent: true, depthWrite: false, opacity: 0.9, toneMapped: false }));
    s.position.z = 0.024 + 0.013 + 0.0015;
    m.add(s);
  });

  const toque = peca("touch", { depth: 0.012, bevel: 0.017, seg: 4 }, new THREE.MeshStandardMaterial({ color: 0xf1eff6, roughness: 0.5 }), 0.008);
  const create = peca("create", { depth: 0.014, bevel: 0.006 }, preto(), 0.002);
  const options = peca("options", { depth: 0.014, bevel: 0.006 }, preto(), 0.002);
  const ps = peca("ps", { depth: 0.02, bevel: 0.012 }, preto(), 0.002);
  const mute = peca("mute", { depth: 0.012, bevel: 0.006 }, preto(), 0.002);

  // Analógicos: base, pescoço e topo côncavo
  const perfil = [[0.2, 0], [0.19, 0.012], [0.135, 0.045], [0.085, 0.09], [0.08, 0.15], [0.135, 0.178], [0.158, 0.196], [0.158, 0.214], [0.142, 0.226], [0.118, 0.218], [0.07, 0.208], [0, 0.205]].map(([a, b]) => new THREE.Vector2(a, b));
  const geoStick = new THREE.LatheGeometry(perfil, 40);
  geoStick.rotateX(PI / 2);
  const matStick = new THREE.MeshStandardMaterial({ color: 0x1a1a20, roughness: 0.55, side: THREE.DoubleSide });
  const stick = (nome) => {
    const [cx, cy] = meioDe(PECA[nome]);
    const m = new THREE.Mesh(geoStick, matStick);
    m.position.set(dx(cx), dy(cy), sup(cx, cy) - 0.008);
    g.add(m);
    return m;
  };
  const stickL = stick("stickL"), stickR = stick("stickR");

  // Ombros e gatilhos
  const l1 = peca("l1", { depth: 0.2, bevel: 0.03, seg: 3 }, preto(), 0);
  const r1 = peca("r1", { depth: 0.2, bevel: 0.03, seg: 3 }, preto(), 0);
  [l1, r1].forEach((m) => { m.position.z = 0.0; m.position.y -= 0.006; m.userData.y0 = m.position.y; m.userData.z0 = 0; });
  const gatilho = (nome) => {
    const pol = PECA[nome], ys = pol.map((p) => p[1]), [cx] = meioDe(pol), base = Math.max(...ys);
    const piv = new THREE.Group();
    const m = new THREE.Mesh(extrude(formaDe(pol, cx, base), { depth: 0.2, bevel: 0.05, seg: 5 }), new THREE.MeshStandardMaterial({ color: 0x24242c, roughness: 0.42, emissive: 0xffb01f, emissiveIntensity: 0 }));
    m.scale.y = 0.74;
    m.position.z = -0.1;
    piv.add(m);
    piv.position.set(dx(cx), dy(158), -0.13);
    piv.rotation.x = -0.34;
    piv.userData.r0 = -0.34;
    piv.userData.m = m;
    g.add(piv);
    return piv;
  };
  const l2 = gatilho("l2"), r2 = gatilho("r2");

  // LEDs de jogador
  const leds = DS.leds.map(([a, b]) => {
    const m = new THREE.Mesh(new THREE.CircleGeometry(0.0165, 16), new THREE.MeshBasicMaterial({ color: 0x24242c, toneMapped: false }));
    m.position.set(dx(a), dy(b), sup(a, b) + 0.004);
    g.add(m);
    return m;
  });

  // Brilho em volta das barras de luz
  const texBrilho = telaDeCanvas(renderer, 128, 256, (x, a, b) => {
    const r2d = x.createRadialGradient(a / 2, b / 2, 0, a / 2, b / 2, a / 2);
    r2d.addColorStop(0, "rgba(255,255,255,1)"); r2d.addColorStop(0.4, "rgba(255,255,255,.34)"); r2d.addColorStop(1, "rgba(255,255,255,0)");
    x.setTransform(1, 0, 0, b / a, 0, 0);
    x.fillStyle = r2d;
    x.fillRect(0, 0, a, a);
  });
  const matBrilho = new THREE.MeshBasicMaterial({ map: texBrilho, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, color: 0x0040ff, opacity: 0 });
  [[258, 240, 0.22], [622, 240, -0.22]].forEach(([a, b, rot]) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 1.05), matBrilho);
    m.position.set(dx(a), dy(b), sup(a, b) + 0.03);
    m.rotation.z = rot;
    g.add(m);
  });

  // Marca pulsando em volta dos botões do passo
  const anelGeo = new THREE.RingGeometry(0.86, 1, 48);
  const marca = (nome, raio) => {
    const [cx, cy] = meioDe(PECA[nome]);
    const m = new THREE.Mesh(anelGeo, new THREE.MeshBasicMaterial({ color: 0xffb01f, transparent: true, opacity: 0, depthWrite: false, toneMapped: false }));
    m.position.set(dx(cx), dy(cy), sup(cx, cy) + 0.05);
    m.scale.setScalar(raio);
    g.add(m);
    return m;
  };
  const marcas = { create: marca("create", 0.13), ps: marca("ps", 0.15) };

  const cor = new THREE.Color(0x0040ff);
  return {
    g, create, options, ps, mute, l1, r1, l2, r2, stickL, stickR, leds, marcas, toque, sup,
    setLuz(c, intensidade) {
      cor.set(c);
      mFrente.emissive.copy(cor);
      mFrente.emissiveIntensity = intensidade * 2.6;
      matBrilho.color.copy(cor);
      matBrilho.opacity = intensidade * 0.75;
    },
    setJogador(ligado) { leds.forEach((m, i) => m.material.color.set(ligado && i === 2 ? 0xffffff : 0x24242c)); },
  };
}

// ---------- Nintendo Switch com os Joy-Con ----------
function botaoRedondo(r, h, mat) {
  const g = new THREE.LatheGeometry([[r, 0], [r, h * 0.7], [r * 0.82, h], [0, h]].map(([a, b]) => new THREE.Vector2(a, b)), 24);
  g.rotateX(PI / 2);
  return new THREE.Mesh(g, mat);
}
function joycon(lado, corHex) {
  const w = 0.72, h = 2.04, ro = 0.42, ri = 0.03, g = new THREE.Group();
  const s = new THREE.Shape(), a = -w / 2, b = -h / 2;
  s.moveTo(a + ro, b);
  s.lineTo(a + w - ri, b); s.quadraticCurveTo(a + w, b, a + w, b + ri);
  s.lineTo(a + w, b + h - ri); s.quadraticCurveTo(a + w, b + h, a + w - ri, b + h);
  s.lineTo(a + ro, b + h); s.quadraticCurveTo(a, b + h, a, b + h - ro);
  s.lineTo(a, b + ro); s.quadraticCurveTo(a, b, a + ro, b);
  const geo = new THREE.ExtrudeGeometry(s, { depth: 0.2, bevelEnabled: true, bevelSize: 0.038, bevelThickness: 0.038, bevelSegments: 5, bevelOffset: -0.038, curveSegments: 18 });
  geo.translate(0, 0, -0.1);
  const corpo = new THREE.Mesh(toCreasedNormals(geo, 0.7), new THREE.MeshStandardMaterial({ color: corHex, roughness: 0.5, envMapIntensity: 0.75 }));
  if (lado > 0) corpo.rotation.y = PI;
  g.add(corpo);
  const Z = 0.138;
  const preto = new THREE.MeshStandardMaterial({ color: 0x17171c, roughness: 0.4 });
  const poco = new THREE.MeshStandardMaterial({ color: 0x0a0a0d, roughness: 0.7 });
  const stick = (x, y) => {
    const base = new THREE.Mesh(new THREE.CircleGeometry(0.19, 32), poco);
    base.position.set(x, y, Z + 0.001);
    const perfil = [[0.17, 0], [0.11, 0.035], [0.075, 0.06], [0.078, 0.09], [0.145, 0.105], [0.148, 0.125], [0.12, 0.136], [0.06, 0.128], [0, 0.126]].map(([q, r]) => new THREE.Vector2(q, r));
    const lat = new THREE.LatheGeometry(perfil, 28);
    lat.rotateX(PI / 2);
    const m = new THREE.Mesh(lat, preto);
    m.position.set(x, y, Z);
    g.add(base, m);
  };
  const quatro = (x, y, d, r) => [[0, d], [d, 0], [0, -d], [-d, 0]].forEach(([p, q]) => {
    const m = botaoRedondo(r, 0.028, preto);
    m.position.set(x + p, y + q, Z);
    g.add(m);
  });
  const dentro = -lado; // lado do console, onde ficam + e -
  if (lado < 0) {
    stick(0.0, 0.5);
    quatro(0.0, -0.13, 0.17, 0.073);
    const menos = new THREE.Mesh(new RoundedBoxGeometry(0.12, 0.028, 0.03, 2, 0.012), preto);
    menos.position.set(dentro * 0.2, 0.86, Z + 0.006);
    const cap = new THREE.Mesh(new RoundedBoxGeometry(0.1, 0.1, 0.028, 2, 0.016), preto);
    cap.position.set(dentro * 0.13, -0.69, Z + 0.006);
    g.add(menos, cap);
  } else {
    stick(0.0, -0.13);
    quatro(0.0, 0.5, 0.17, 0.073);
    const a1 = new THREE.Mesh(new RoundedBoxGeometry(0.12, 0.028, 0.03, 2, 0.012), preto);
    a1.position.set(dentro * 0.2, 0.86, Z + 0.006);
    const a2 = new THREE.Mesh(new RoundedBoxGeometry(0.028, 0.12, 0.03, 2, 0.012), preto);
    a2.position.set(dentro * 0.2, 0.86, Z + 0.006);
    const casa = botaoRedondo(0.058, 0.026, new THREE.MeshStandardMaterial({ color: 0x8d8d96, metalness: 0.75, roughness: 0.3 }));
    casa.position.set(dentro * 0.13, -0.69, Z);
    g.add(a1, a2, casa);
  }
  // botão de ombro
  const ombro = new THREE.Mesh(new RoundedBoxGeometry(0.42, 0.07, 0.18, 3, 0.03), preto);
  ombro.position.set(lado * 0.06, h / 2 + 0.002, -0.02);
  g.add(ombro);
  return g;
}

function criaSwitch(renderer) {
  const g = new THREE.Group();
  const TW = 3.46, TH = 2.04, TT = 0.276;
  g.add(new THREE.Mesh(new RoundedBoxGeometry(TW, TH, TT, 4, 0.05), new THREE.MeshStandardMaterial({ color: 0x18181d, roughness: 0.55 })));
  const vidro = new THREE.Mesh(new THREE.PlaneGeometry(TW - 0.05, TH - 0.05), new THREE.MeshBasicMaterial({ color: 0x050507, toneMapped: false }));
  vidro.position.z = TT / 2 + 0.001;
  g.add(vidro);

  const escuro = new THREE.DataTexture(new Uint8Array([6, 6, 12, 255]), 1, 1);
  escuro.needsUpdate = true;
  const SW = 2.86, SH = (SW * 9) / 16;
  const novo = new THREE.Mesh(new THREE.PlaneGeometry(SW, SH), new THREE.MeshBasicMaterial({ map: escuro, toneMapped: false }));
  const velho = new THREE.Mesh(new THREE.PlaneGeometry(SW, SH), new THREE.MeshBasicMaterial({ map: escuro, toneMapped: false, transparent: true, opacity: 0, depthWrite: false }));
  novo.position.z = TT / 2 + 0.003;
  velho.position.z = TT / 2 + 0.004;
  g.add(novo, velho);
  // reflexo diagonal no vidro
  const reflexo = telaDeCanvas(renderer, 256, 144, (x, a, b) => {
    const r = x.createLinearGradient(0, 0, a, b);
    r.addColorStop(0, "rgba(255,255,255,.075)"); r.addColorStop(0.32, "rgba(255,255,255,.012)"); r.addColorStop(0.33, "rgba(255,255,255,0)"); r.addColorStop(1, "rgba(255,255,255,0)");
    x.fillStyle = r; x.fillRect(0, 0, a, b);
  });
  const brilho = new THREE.Mesh(new THREE.PlaneGeometry(TW - 0.05, TH - 0.05), new THREE.MeshBasicMaterial({ map: reflexo, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
  brilho.position.z = TT / 2 + 0.005;
  g.add(brilho);

  // As cores dos Joy-Con são as do console das capturas: vermelho à esquerda, azul à direita.
  const je = joycon(-1, 0xd9150e), jd = joycon(1, 0x0096cf);
  je.position.x = -(TW / 2 + 0.362);
  jd.position.x = TW / 2 + 0.362;
  g.add(je, jd);

  // Tela: troca de captura com fusão curta. Cada captura só é baixada quando vai aparecer.
  const cache = {};
  const carrega = (nome) => (cache[nome] ??= new THREE.TextureLoader().loadAsync(IMG + TELAS[nome]).then((t) => {
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = renderer.capabilities.getMaxAnisotropy();
    return t;
  }));
  let alvo = null, fade = 0;
  const api = {
    aoTrocar: null,
    semFusao: false,
    g,
    centroTela: new THREE.Vector3(0, 0, TT / 2),
    mostra(nome) {
      if (nome === alvo) return;
      alvo = nome;
      carrega(nome).then((t) => {
        if (alvo !== nome) return;
        velho.material.map = novo.material.map;
        novo.material.map = t;
        velho.material.needsUpdate = true;
        novo.material.needsUpdate = true;
        fade = api.semFusao ? 0 : 1;
        velho.material.opacity = fade;
        api.aoTrocar?.();
      }).catch(() => {});
    },
    carrega,
    passo(dt) {
      if (fade > 0) { fade = Math.max(0, fade - dt * 5); velho.material.opacity = fade; }
    },
  };
  return api;
}

// ---------- sinal entre o controle e o console ----------
function criaSinal(renderer, scene) {
  const N = 90;
  const pos = new Float32Array(N * 3), cor = new Float32Array(N * 3);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("color", new THREE.BufferAttribute(cor, 3));
  const ponto = telaDeCanvas(renderer, 64, 64, (x) => {
    const r = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    r.addColorStop(0, "rgba(255,255,255,1)"); r.addColorStop(0.3, "rgba(255,255,255,.55)"); r.addColorStop(1, "rgba(255,255,255,0)");
    x.fillStyle = r; x.fillRect(0, 0, 64, 64);
  });
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.3, map: ponto, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
  pts.frustumCulled = false;
  scene.add(pts);
  const aneis = [0, 1, 2].map(() => {
    const m = new THREE.Mesh(new THREE.RingGeometry(0.965, 1, 64), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, side: THREE.DoubleSide }));
    scene.add(m);
    return m;
  });
  const flash = new THREE.Mesh(new THREE.RingGeometry(0.93, 1, 64), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, side: THREE.DoubleSide, color: 0x4edea3 }));
  scene.add(flash);
  const c0 = new THREE.Color(), a = new THREE.Vector3(), b = new THREE.Vector3(), m = new THREE.Vector3(), p = new THREE.Vector3();
  return {
    fluxo(de, para, forca, t, corHex) {
      c0.set(corHex);
      a.copy(de); b.copy(para);
      m.copy(a).add(b).multiplyScalar(0.5);
      m.z += 1.15; m.x += 0.5;
      for (let i = 0; i < N; i++) {
        const u = (t * 0.42 + i / N) % 1, v = 1 - u;
        p.set(0, 0, 0).addScaledVector(a, v * v).addScaledVector(m, 2 * u * v).addScaledVector(b, u * u);
        const onda = Math.sin(u * PI) * (0.55 + 0.45 * Math.sin(i * 2.4)) * forca;
        pos[i * 3] = p.x; pos[i * 3 + 1] = p.y; pos[i * 3 + 2] = p.z;
        cor[i * 3] = c0.r * onda; cor[i * 3 + 1] = c0.g * onda; cor[i * 3 + 2] = c0.b * onda;
      }
      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
      pts.visible = forca > 0.001;
    },
    ondas(centro, forca, t, corHex, cam) {
      aneis.forEach((r, i) => {
        const u = (t * 0.7 + i / 3) % 1;
        r.position.copy(centro);
        r.quaternion.copy(cam.quaternion);
        r.scale.setScalar(0.6 + u * 1.9);
        r.material.color.set(corHex);
        r.material.opacity = forca * (1 - u) * 0.42;
        r.visible = forca > 0.001;
      });
    },
    explosao(centro, u, cam) {
      flash.visible = u > 0 && u < 1;
      if (!flash.visible) return;
      flash.position.copy(centro);
      flash.quaternion.copy(cam.quaternion);
      flash.scale.setScalar(0.8 + 3.4 * u);
      flash.material.opacity = (1 - u) * 0.9;
    },
  };
}

// ---------- a cena completa ----------
function montaCena(renderer, scene, { pequena = false } = {}) {
  const raiz = new THREE.Group();
  scene.add(raiz);
  const sw = criaSwitch(renderer);
  sw.g.position.set(0, 1.42, -0.5);
  sw.g.rotation.x = -0.05;
  const ds = criaControle(renderer, { pequena });
  ds.g.position.set(0, -1.32, 0.75);
  ds.g.rotation.x = -0.56;
  raiz.add(sw.g, ds.g);
  const sinal = criaSinal(renderer, scene);
  // Cartão de memória com o app, descendo até o console no passo 1
  const texSd = telaDeCanvas(renderer, 256, 340, (x, a, b) => {
    x.fillStyle = "#17171d"; x.fillRect(0, 0, a, b);
    const f = x.createLinearGradient(0, 40, a, b);
    f.addColorStop(0, "#6d4cff"); f.addColorStop(1, "#c026d3");
    x.fillStyle = f; x.fillRect(16, 96, a - 32, b - 112);
    x.fillStyle = "#fff"; x.textAlign = "center"; x.font = "800 40px Arial,sans-serif";
    x.fillText("Control", a / 2, 196); x.fillText("PS-5", a / 2, 244);
    x.fillStyle = "#c9a227";
    for (let i = 0; i < 7; i++) x.fillRect(20 + i * 32, 14, 22, 52);
  });
  const sd = new THREE.Mesh(new RoundedBoxGeometry(0.44, 0.585, 0.03, 2, 0.012), [0, 0, 0, 0].map(() => new THREE.MeshStandardMaterial({ color: 0x17171d })).concat([new THREE.MeshStandardMaterial({ map: texSd, roughness: 0.45, transparent: true }), new THREE.MeshStandardMaterial({ color: 0x17171d })]));
  sd.material.forEach((m) => { m.transparent = true; });
  raiz.add(sd);
  ds.setLuz("#0040FF", 0);
  ds.setJogador(false);
  const deP = new THREE.Vector3(), paraP = new THREE.Vector3();
  const estado = { cor: CORES[0][1], efeito: "Sem efeito", ciclo: true };

  // s vai de 0 a 5, um trecho para cada passo do tutorial
  const aplica = (s, t, cam, dt) => {
    let tela = "homebrew";
    if (s >= 0.55) tela = "instalar";
    if (s >= 1.25) tela = "instalando";
    if (s >= 1.5) tela = "reiniciar";
    if (s >= 1.75) tela = "parear";
    if (s >= 2.3) tela = "controles";
    if (s >= 3.7) tela = "sincronizar";
    if (s >= 4.5) tela = "conectado";
    if (s >= 4.82) tela = estado.ciclo ? (Math.floor(t / 3.2) % 2 ? "gatilhos" : "luzes") : "luzes";
    sw.mostra(tela);
    sw.passo(dt);

    // Cartão de memória: desce e some atrás do console, só no passo 1
    const voltaSd = (t / 2.6) % 1, forcaSd = 1 - sm(0.3, 0.55, s);
    sd.visible = forcaSd > 0.01;
    if (sd.visible) {
      sd.position.set(1.1, mix(3.45, 2.36, sm(0, 0.8, voltaSd)), -0.56);
      sd.rotation.set(-0.05, 0, 0);
      const o = forcaSd * sm(0, 0.12, voltaSd) * (1 - sm(0.82, 1, voltaSd));
      sd.material.forEach((m) => { m.opacity = o; });
    }

    // Create + PS
    const seg = sm(2.75, 2.95, s) * (1 - sm(3.75, 3.95, s));
    ds.create.position.z = ds.create.userData.z0 - 0.012 * seg;
    ds.ps.position.z = ds.ps.userData.z0 - 0.016 * seg;
    const pulso = 0.6 + 0.4 * Math.sin(t * 6);
    ds.create.material.emissiveIntensity = seg * 1.4 * pulso;
    ds.ps.material.emissiveIntensity = seg * 1.4 * pulso;
    ds.marcas.create.material.opacity = seg * pulso;
    ds.marcas.ps.material.opacity = seg * pulso;
    // L1 + R1
    const om = sm(3.82, 3.98, s) * (1 - sm(4.42, 4.56, s));
    [ds.l1, ds.r1].forEach((m) => {
      m.position.y = m.userData.y0 - 0.022 * om;
      m.material.emissiveIntensity = om * 1.6 * pulso;
    });
    // Barras de luz: piscam no pareamento, ficam fixas ao conectar (como no controle de verdade)
    const pareando = s >= 2.95 && s < 4.5;
    const conectado = s >= 4.5;
    if (pareando) ds.setLuz("#0040FF", (t * 3.2) % 1 < 0.5 ? 1 : 0.1);
    else if (conectado) {
      const c = estado.ciclo && s >= 4.82 ? CORES[Math.floor(t / 1.1) % CORES.length][1] : estado.cor;
      ds.setLuz(c, 0.95);
    } else ds.setLuz("#0040FF", 0);
    ds.setJogador(conectado);

    // Gatilho R2 com o efeito escolhido
    const u = (t / 2.2) % 1;
    const p = s >= 4.7 ? EFEITOS[estado.efeito](u, t) * sm(4.7, 4.85, s) : 0;
    ds.r2.rotation.x = ds.r2.userData.r0 - p * 0.72;
    ds.r2.userData.m.material.emissiveIntensity = p * 0.35;
    // Analógicos mexendo depois de conectar
    const sol = sm(4.7, 4.9, s);
    ds.stickL.rotation.set(Math.sin(t * 1.3) * 0.2 * sol, Math.cos(t * 1.1) * 0.2 * sol, 0);
    ds.stickR.rotation.set(Math.cos(t * 0.9) * 0.16 * sol, Math.sin(t * 1.5) * 0.16 * sol, 0);

    // Sinal
    ds.g.updateWorldMatrix(true, false);
    sw.g.updateWorldMatrix(true, false);
    deP.set(0, dy(235), 0.22).applyMatrix4(ds.g.matrixWorld);
    paraP.set(0, -0.75, 0.2).applyMatrix4(sw.g.matrixWorld);
    sinal.fluxo(deP, paraP, sm(3.9, 4.05, s) * (1 - sm(4.42, 4.56, s)), t, "#6fa8ff");
    sinal.ondas(deP, (pareando ? 1 : 0), t, "#5a8bff", cam);
    const centroTela = paraP.set(0, 0, 0.2).applyMatrix4(sw.g.matrixWorld);
    sinal.explosao(centroTela, (s - 4.5) / 0.32, cam);
  };
  return { raiz, sw, ds, sinal, aplica, estado };
}

const QUADROS = [
  [0, [-1.5, 2.2, 9.6], [0, 1.3, -0.5]],
  [1, [-0.9, 1.75, 6.7], [0, 1.38, -0.5]],
  [2, [0.8, 1.7, 6.5], [0, 1.38, -0.5]],
  [3, [-0.7, 1.3, 6.1], [0, -1.18, 0.75]],
  [4, [1.5, 0.75, 11.4], [0, -0.05, 0.1]],
  [5, [-1.4, 0.65, 10.6], [0, -0.05, 0.1]],
];
function quadro(s) {
  let i = 0;
  while (i < QUADROS.length - 2 && s > QUADROS[i + 1][0]) i++;
  const [a, pa, la] = QUADROS[i], [z, pz, lz] = QUADROS[i + 1], k = sm(a, z, s);
  return { p: pa.map((v, n) => mix(v, pz[n], k)), l: la.map((v, n) => mix(v, lz[n], k)) };
}

// ---------- primeira dobra: conecta sozinho e depois responde à cor e ao efeito escolhidos ----------
export async function initHero(canvas, { onReady, pequena = false } = {}) {
  const { renderer, scene } = base(canvas, pequena ? 1.5 : 1.75);
  const cam = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  const cena = montaCena(renderer, scene, { pequena });
  const calmo = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const OLHA = new THREE.Vector3(0, -0.06, 0.1);
  let w = 1, h = 1, recua = 1;
  const medir = () => {
    w = canvas.clientWidth || 1; h = canvas.clientHeight || 1;
    renderer.setSize(w, h, false);
    cam.aspect = w / h;
    recua = Math.max(1, 0.98 / cam.aspect);
    cam.updateProjectionMatrix();
  };
  new ResizeObserver(medir).observe(canvas);
  medir();
  cena.sw.semFusao = calmo;
  await Promise.all(["sincronizar", "conectado", "luzes", "gatilhos"].map((n) => cena.sw.carrega(n)));

  let parado = false, rot = -0.2, inc = 0.06, arrasta = false, px = 0, py = 0, vis = true, raf = 0, ult = performance.now(), t0 = ult, escolheu = false;
  const CICLO = 19; // segundos: parea, conecta, mostra as cores e recomeça
  const sDoTempo = (x) => {
    if (escolheu) return 5;
    const u = x % CICLO;
    if (u < 2.4) return mix(3.05, 3.8, u / 2.4);
    if (u < 4.6) return mix(3.8, 4.5, (u - 2.4) / 2.2);
    if (u < 6) return mix(4.5, 5, (u - 4.6) / 1.4);
    return 5;
  };
  const desenha = (agora) => {
    const dt = Math.min(0.05, (agora - ult) / 1000);
    ult = agora;
    const t = Math.max(0, (agora - t0) / 1000);
    const s = calmo ? 5 : sDoTempo(t);
    cena.raiz.rotation.y = rot + (arrasta || calmo ? 0 : Math.sin(t * 0.32) * 0.1);
    cena.raiz.rotation.x = inc;
    cam.position.set(0.0, 0.62 * recua, 11.5 * recua);
    cam.lookAt(OLHA);
    cena.aplica(s, t, cam, dt);
    renderer.render(scene, cam);
    if (vis && !document.hidden && !calmo && !parado) raf = requestAnimationFrame(desenha);
    else raf = 0;
  };
  const toca = () => { if (!raf && !parado) { ult = performance.now(); raf = requestAnimationFrame(desenha); } };
  cena.sw.aoTrocar = () => { if (calmo) toca(); };
  new IntersectionObserver(([e]) => { vis = e.isIntersecting; if (vis) toca(); }).observe(canvas);
  document.addEventListener("visibilitychange", () => { if (!document.hidden && vis) toca(); });
  canvas.addEventListener("pointerdown", (e) => { arrasta = true; px = e.clientX; py = e.clientY; canvas.setPointerCapture?.(e.pointerId); canvas.classList.add("pega"); });
  canvas.addEventListener("pointermove", (e) => {
    if (!arrasta) return;
    rot = Math.max(-1.1, Math.min(1.1, rot + (e.clientX - px) * 0.008));
    inc = Math.max(-0.28, Math.min(0.5, inc + (e.clientY - py) * 0.004));
    px = e.clientX; py = e.clientY;
    toca();
  });
  const solta = () => { arrasta = false; canvas.classList.remove("pega"); };
  canvas.addEventListener("pointerup", solta);
  canvas.addEventListener("pointercancel", solta);
  raf = requestAnimationFrame(desenha);
  onReady?.();
  const escolha = () => { escolheu = true; cena.estado.ciclo = false; toca(); };
  return {
    setCor(c) { cena.estado.cor = c; escolha(); },
    setEfeito(n) { cena.estado.efeito = n; escolha(); },
    // para gerar a imagem de capa e testar
    quadro(s, t) { cena.estado.ciclo = false; cam.position.set(0, 0.62 * recua, 11.5 * recua); cam.lookAt(OLHA); cam.updateMatrixWorld(); cena.aplica(s, t, cam, 0.5); renderer.render(scene, cam); },
    parar() { parado = true; },
    cena,
  };
}

// ---------- passo a passo guiado pela rolagem ----------
export async function initStory(canvas, camadaRotulos, { pequena = false } = {}) {
  const { renderer, scene } = base(canvas, pequena ? 1.5 : 1.75);
  const cam = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  const cena = montaCena(renderer, scene, { pequena });
  cena.estado.ciclo = true;
  const calmo = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w = 1, h = 1, recua = 1;
  const medir = () => {
    w = canvas.clientWidth || 1; h = canvas.clientHeight || 1;
    renderer.setSize(w, h, false);
    cam.aspect = w / h;
    recua = Math.max(1, 0.86 / cam.aspect);
    cam.updateProjectionMatrix();
  };
  new ResizeObserver(medir).observe(canvas);
  medir();
  cena.sw.semFusao = calmo;
  await cena.sw.carrega("homebrew");
  // As outras capturas vêm em seguida, sem segurar a primeira imagem.
  ["instalar", "parear", "controles", "sincronizar", "conectado", "luzes", "gatilhos", "instalando", "reiniciar"].forEach((n) => cena.sw.carrega(n));

  // Etiquetas presas às peças
  const v = new THREE.Vector3();
  const etiquetas = [
    ["Create", "am", () => cena.ds.create, [-0.06, 0.2, 0.04], 2.8, 3.8],
    ["PS", "am", () => cena.ds.ps, [0, -0.2, 0.04], 2.8, 3.8],
    ["L1", "am", () => cena.ds.l1, [-0.1, 0.16, 0.1], 3.84, 4.5],
    ["R1", "am", () => cena.ds.r1, [0.1, 0.16, 0.1], 3.84, 4.5],
    ["Barras de luz piscando", "az", () => cena.ds.toque, [0, 0.55, 0.1], 3.0, 3.72],
    ["R2", "ro", () => cena.ds.r2, [0.1, 0.5, 0], 4.82, 9],
  ].map(([txt, cl2, peca, off, a, z]) => {
    const el = document.createElement("span");
    el.className = "l3d " + cl2;
    el.textContent = txt;
    el.style.opacity = "0";
    camadaRotulos.appendChild(el);
    return { el, peca, off, a, z };
  });
  const desenhaRotulos = (s) => {
    etiquetas.forEach(({ el, peca, off, a, z }) => {
      const op = sm(a, a + 0.06, s) * (1 - sm(z, z + 0.06, s));
      el.style.opacity = op.toFixed(2);
      if (op <= 0.01) return;
      const m = peca();
      m.updateWorldMatrix(true, false);
      v.set(off[0], off[1], off[2]).applyMatrix4(m.matrixWorld).project(cam);
      el.style.transform = `translate(calc(${((v.x * 0.5 + 0.5) * w).toFixed(1)}px - 50%),calc(${((-v.y * 0.5 + 0.5) * h).toFixed(1)}px - 50%))`;
    });
  };

  let alvo = 0, s = 0, vis = false, raf = 0, ult = performance.now(), t0 = ult;
  const desenha = (agora) => {
    const dt = Math.min(0.05, (agora - ult) / 1000);
    ult = agora;
    s += (alvo - s) * (calmo ? 1 : 1 - Math.exp(-dt * 7));
    const t = Math.max(0, (agora - t0) / 1000);
    const { p, l } = quadro(s);
    const dir = new THREE.Vector3(p[0] - l[0], p[1] - l[1], p[2] - l[2]).multiplyScalar(recua);
    cam.position.set(l[0] + dir.x, l[1] + dir.y, l[2] + dir.z);
    cam.lookAt(l[0], l[1], l[2]);
    cam.updateMatrixWorld();
    cena.aplica(s, t, cam, dt);
    renderer.render(scene, cam);
    desenhaRotulos(s);
    if (vis && !document.hidden && !calmo) raf = requestAnimationFrame(desenha);
    else raf = 0;
  };
  const toca = () => { if (!raf) { ult = performance.now(); raf = requestAnimationFrame(desenha); } };
  cena.sw.aoTrocar = () => { if (calmo) toca(); };
  new IntersectionObserver(([e]) => { vis = e.isIntersecting; if (vis) toca(); }).observe(canvas);
  document.addEventListener("visibilitychange", () => { if (!document.hidden && vis) toca(); });
  toca();
  return {
    /** s de 0 a 5. Com imediato, pula a animação (menos movimento e testes). */
    ir(v2, imediato = false) { alvo = v2; if (imediato) s = v2; toca(); },
    cena,
  };
}
