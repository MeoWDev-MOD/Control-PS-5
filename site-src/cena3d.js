// Cena da página: o Nintendo Switch (3D) e o controle de PS5 se conectando.
// O controle é o mesmo desenho de frente do app, em camadas (frente.json e img/dualsense-frente.webp, gerados por
// app/tools/gerar_controle2d.py), e a tela do Switch mostra as telas do app. Sem logo da Nintendo nem da Sony.
// Gerar o arquivo final: ver site-src/LEIA-ME.md.
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { toCreasedNormals } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import FR from "./frente.json";

const IMG = new URL("../img/", import.meta.url).href;
const PI = Math.PI;
const cl = (x) => Math.max(0, Math.min(1, x));
const sm = (a, b, x) => { const t = cl((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const mix = (a, b, t) => a + (b - a) * t;

// 1 unidade = 5 cm. O controle tem 16 cm; o Switch com os Joy-Con, 23,9 x 10,2 x 1,4 cm.

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
// ---------- controle de PS5: o mesmo desenho de frente do app, em camadas ----------
// As peças (atlas img/dualsense-frente.webp, posições em frente.json) ficam em profundidades diferentes. O
// controle olha sempre para a câmera e só balança de leve, como no app: assim ele nunca deforma.
const FR_VS = `varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
// Cor da peça x tinta, misturada com o âmbar do botão apertado, mais a luz própria (barra, LEDs)
const FR_FS = `uniform sampler2D map;
uniform vec3 mul;
uniform vec3 add;
uniform vec3 hlc;
uniform float hl;
uniform float alpha;
varying vec2 vUv;
void main() {
  vec4 t = texture2D(map, vUv);
  vec3 c = mix(t.rgb * mul, hlc, hl) + add;
  gl_FragColor = vec4(c, t.a * alpha);
}`;
const PROFUNDO = 1.6;   // exagera um pouco a distância entre as camadas: a inclinação leve aparece mais
const hex = (h) => { const n = parseInt(h.replace("#", ""), 16); return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]; };

function criaControle(renderer) {
  const g = new THREE.Group();
  const tex = new THREE.TextureLoader().load(IMG + "dualsense-frente.webp");
  tex.flipY = false;
  tex.colorSpace = THREE.NoColorSpace;   // as cores já são as do desenho: o shader não converte
  tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const [AW, AH] = FR.atlas, u = FR.unidade, [cx, cy] = FR.centro;
  const P = {};
  [...FR.pecas].sort((a, b) => a.z - b.z).forEach((p, ordem) => {
    const [ax, ay, aw, ah] = p.atlas, [x0, y0] = p.xy, [nx, ny] = p.ancora;
    const geo = new THREE.PlaneGeometry(aw * u, ah * u);
    // a peça gira, encolhe e anda em volta do próprio centro (âncora)
    geo.translate((x0 + aw / 2 - nx) * u, -(y0 + ah / 2 - ny) * u, 0);
    const uv = geo.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (ax + uv.getX(i) * aw) / AW, (ay + (1 - uv.getY(i)) * ah) / AH);
    const aditivo = p.tipo === "gatilho" || p.tipo === "brilho" || p.tipo === "led";
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        map: { value: tex }, mul: { value: new THREE.Vector3(1, 1, 1) }, add: { value: new THREE.Vector3(0, 0, 0) },
        hlc: { value: new THREE.Vector3(1, 0.69, 0.12) }, hl: { value: 0 }, alpha: { value: aditivo ? 0 : 1 },
      },
      vertexShader: FR_VS, fragmentShader: FR_FS, transparent: true, depthWrite: false,
      blending: aditivo ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    const m = new THREE.Mesh(geo, mat);
    m.position.set((nx - cx) * u, -(ny - cy) * u, p.z * PROFUNDO);
    m.renderOrder = 10 + ordem;
    m.userData = { x0: m.position.x, y0: m.position.y, z0: m.position.z };
    g.add(m);
    P[p.nome] = m;
  });

  // Anel pulsando em volta dos botões do passo (Create e PS)
  const anelGeo = new THREE.RingGeometry(0.86, 1, 48);
  const marca = (nome, raio) => {
    const ref = P[nome];
    const m = new THREE.Mesh(anelGeo, new THREE.MeshBasicMaterial({ color: 0xffb01f, transparent: true, opacity: 0, depthWrite: false, toneMapped: false }));
    m.position.set(ref.position.x, ref.position.y, ref.position.z + 0.03);
    m.scale.setScalar(raio);
    m.renderOrder = 100;
    g.add(m);
    return m;
  };
  const marcas = { create: marca("create", 0.1), ps: marca("ps", 0.12) };
  ["l2", "r2"].forEach((n) => P[n].material.uniforms.mul.value.set(1, 0.69, 0.12));
  const THROW = 0.05;
  const realce = (m, brilho) => { m.material.uniforms.hl.value = Math.min(1, brilho * 0.72); };

  return {
    g, create: P.create, options: P.options, ps: P.ps, l1: P.l1, r1: P.r1, l2: P.l2, r2: P.r2, toque: P.touch, marcas,
    /** Botão afundando (k) e acendendo em âmbar (brilho), de 0 a 1 */
    botao(nome, k, brilho = k) {
      const m = P[nome];
      m.position.z = m.userData.z0 - 0.012 * k;
      m.scale.setScalar(1 - 0.045 * k);
      m.material.uniforms.mul.value.setScalar(1 - 0.12 * k);
      realce(m, brilho);
    },
    ombro(nome, k, brilho = k) {
      const m = P[nome];
      m.position.y = m.userData.y0 - 0.014 * k;
      m.material.uniforms.mul.value.setScalar(1 - 0.12 * k);
      realce(m, brilho);
    },
    /** L2/R2 ficam atrás do L1/R1: apertar acende o ombro na intensidade do aperto */
    gatilho(nome, p) { P[nome].material.uniforms.alpha.value = cl(p) * 0.95; },
    stick(nome, x, y) {
      const m = P[nome];
      m.position.x = m.userData.x0 + x * THROW;
      m.position.y = m.userData.y0 + y * THROW;
    },
    setLuz(c, k) {
      const [r, gg, b] = hex(c);
      const luz = P.luz.material.uniforms, apagada = [0.2, 0.21, 0.26];
      luz.mul.value.set(mix(apagada[0], r, k), mix(apagada[1], gg, k), mix(apagada[2], b, k));
      luz.add.value.set(r * 0.35 * k, gg * 0.35 * k, b * 0.35 * k);
      const glow = P.luzglow.material.uniforms;
      glow.mul.value.set(r, gg, b);
      glow.alpha.value = 0.55 * k;
    },
    setJogador(ligado) { for (let i = 0; i < 5; i++) P["led" + i].material.uniforms.alpha.value = ligado && i === 2 ? 1 : 0; },
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
  const ds = criaControle(renderer);
  ds.g.position.set(0, -1.32, 0.75);
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

    // O controle fica de frente para a câmera e só balança de leve, como no app
    ds.g.lookAt(cam.position);
    ds.g.rotateY(Math.sin(t * 0.55) * 0.06);
    ds.g.rotateX(-0.03 + Math.sin(t * 0.41) * 0.025);

    // Create + PS
    const seg = sm(2.75, 2.95, s) * (1 - sm(3.75, 3.95, s));
    const pulso = 0.6 + 0.4 * Math.sin(t * 6);
    ds.botao("create", seg, seg * pulso);
    ds.botao("ps", seg, seg * pulso);
    ds.marcas.create.material.opacity = seg * pulso;
    ds.marcas.ps.material.opacity = seg * pulso;
    // L1 + R1
    const om = sm(3.82, 3.98, s) * (1 - sm(4.42, 4.56, s));
    ds.ombro("l1", om, om * pulso);
    ds.ombro("r1", om, om * pulso);
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
    ds.gatilho("r2", p);
    // Analógicos mexendo depois de conectar
    const sol = sm(4.7, 4.9, s);
    ds.stick("stickL", Math.sin(t * 1.3) * sol, Math.cos(t * 1.1) * sol);
    ds.stick("stickR", Math.cos(t * 0.9) * 0.8 * sol, Math.sin(t * 1.5) * 0.8 * sol);

    // Sinal
    ds.g.updateWorldMatrix(true, false);
    sw.g.updateWorldMatrix(true, false);
    ds.ps.getWorldPosition(deP);
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
    rot = Math.max(-0.45, Math.min(0.45, rot + (e.clientX - px) * 0.004));
    inc = Math.max(-0.12, Math.min(0.28, inc + (e.clientY - py) * 0.002));
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
