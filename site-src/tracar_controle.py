# Mede o desenho do controle usado no próprio app (assets/controller.png) e grava o contorno de cada peça em dualsense.json.
# O modelo 3D da página (cena3d.js) é montado a partir desses contornos, então as peças ficam nos lugares certos.
# Uso: python site-src/tracar_controle.py
import json
import os
from collections import deque

import numpy as np
from PIL import Image

AQUI = os.path.dirname(os.path.abspath(__file__))
img = np.array(Image.open(os.path.join(AQUI, "..", "assets", "controller.png")).convert("RGBA"))
H, W = img.shape[:2]
linha = img[:, :, 3] > 90

# Cada região fechada entre as linhas é uma peça do controle.
rotulos = np.zeros((H, W), dtype=np.int32)
regioes = []
for y in range(H):
    for x in range(W):
        if linha[y, x] or rotulos[y, x]:
            continue
        rid = len(regioes) + 1
        fila = deque([(x, y)])
        rotulos[y, x] = rid
        n, sx, sy, x0, y0, x1, y1 = 0, 0, 0, x, y, x, y
        while fila:
            a, b = fila.popleft()
            n += 1; sx += a; sy += b
            x0, y0, x1, y1 = min(x0, a), min(y0, b), max(x1, a), max(y1, b)
            for c, d in ((a + 1, b), (a - 1, b), (a, b + 1), (a, b - 1)):
                if 0 <= c < W and 0 <= d < H and not linha[d, c] and not rotulos[d, c]:
                    rotulos[d, c] = rid
                    fila.append((c, d))
        regioes.append(dict(id=rid, n=n, cx=sx / n, cy=sy / n, x0=x0, y0=y0, x1=x1, y1=y1))


def contorno(rid):
    """Contorno externo da região, em sentido fixo (Moore)."""
    m = rotulos == rid
    ys, xs = np.nonzero(m)
    i = np.lexsort((xs, ys))[0]
    ini = (int(xs[i]), int(ys[i]))
    viz = [(1, 0), (1, 1), (0, 1), (-1, 1), (-1, 0), (-1, -1), (0, -1), (1, -1)]
    pts = [ini]
    atual, d = ini, 6
    for _ in range(200000):
        for k in range(8):
            nd = (d + 6 + k) % 8
            c, e = atual[0] + viz[nd][0], atual[1] + viz[nd][1]
            if 0 <= c < W and 0 <= e < H and m[e, c]:
                atual, d = (c, e), nd
                break
        if atual == ini:
            break
        pts.append(atual)
    return pts


def rdp(p, tol):
    if len(p) < 3:
        return p
    a, b = np.array(p[0], float), np.array(p[-1], float)
    v = b - a
    n = np.hypot(*v) or 1.0
    q = np.array(p[1:-1], float)
    dist = np.abs(v[0] * (q[:, 1] - a[1]) - v[1] * (q[:, 0] - a[0])) / n
    i = int(np.argmax(dist))
    if dist[i] <= tol:
        return [p[0], p[-1]]
    return rdp(p[: i + 2], tol)[:-1] + rdp(p[i + 1:], tol)


def simplifica(pts, tol=0.55):
    meio = len(pts) // 2
    return rdp(pts[: meio + 1], tol)[:-1] + rdp(pts[meio:] + [pts[0]], tol)[:-1]


# ---------- nomes pela posição, com o desenho visto de frente ----------
def achar(cx, cy, raio=30, nmin=4):
    cand = [r for r in regioes if r["n"] >= nmin and np.hypot(r["cx"] - cx, r["cy"] - cy) < raio]
    return min(cand, key=lambda r: np.hypot(r["cx"] - cx, r["cy"] - cy))


fundo = rotulos[0, 0]
PONTOS = {
    "l2": (154, 62), "r2": (721, 62), "l1": (161, 148), "r1": (715, 148),
    "touch": (435, 228), "moldura": (441, 275),
    "dpadU": (152, 243), "dpadD": (152, 327), "dpadL": (110, 285), "dpadR": (194, 285),
    "tri": (723, 227), "cir": (783, 283), "x": (723, 340), "qua": (663, 283),
    "create": (219, 200), "options": (656, 200), "stickL": (284, 405), "stickR": (593, 405), "ps": (438, 402), "mute": (438, 456),
    "asaE": (107, 397), "asaD": (768, 400), "centro": (436, 464),
}
pecas = {}
for nome, (cx, cy) in PONTOS.items():
    r = achar(cx, cy)
    pecas[nome] = dict(p=simplifica(contorno(r["id"])), c=[round(r["cx"], 1), round(r["cy"], 1)], n=r["n"])

# Silhueta do corpo: tudo que não é fundo nem gatilho (L1, R1, L2 e R2 ficam de fora, são peças separadas).
foraId = {fundo}
corpo = np.zeros((H, W), dtype=bool)
corpo[rotulos != fundo] = True
for k in ("l2", "r2"):
    rid = achar(*PONTOS[k])["id"]
    aux = rotulos == rid
    # engorda 8 px para levar junto a linha do desenho do gatilho
    for _ in range(8):
        aux = aux | np.roll(aux, 1, 0) | np.roll(aux, -1, 0) | np.roll(aux, 1, 1) | np.roll(aux, -1, 1)
    corpo[aux] = False
rotulos2 = np.where(corpo, 999999, 0)
ys, xs = np.nonzero(corpo)
print("corpo", corpo.sum(), xs.min(), ys.min(), xs.max(), ys.max())
# maior componente do corpo
vis = np.zeros((H, W), dtype=bool)
melhor = None
for y0, x0 in zip(*np.nonzero(corpo)):
    if vis[y0, x0]:
        continue
    fila = deque([(x0, y0)]); vis[y0, x0] = True; pix = []
    while fila:
        a, b = fila.popleft(); pix.append((a, b))
        for c, d in ((a + 1, b), (a - 1, b), (a, b + 1), (a, b - 1)):
            if 0 <= c < W and 0 <= d < H and corpo[d, c] and not vis[d, c]:
                vis[d, c] = True; fila.append((c, d))
    if melhor is None or len(pix) > len(melhor):
        melhor = pix
rotulos[:] = 0
for a, b in melhor:
    rotulos[b, a] = 1
pecas["corpo"] = dict(p=simplifica(contorno(1), 0.6), c=[0, 0], n=len(melhor))

saida = {"w": W, "h": H, "leds": [[405, 345], [421, 345], [438, 345], [455, 345], [472, 345]], "pecas": {k: {"p": [[int(a), int(b)] for a, b in v["p"]], "c": v["c"]} for k, v in pecas.items()}}
with open(os.path.join(AQUI, "dualsense.json"), "w", encoding="utf-8") as f:
    json.dump(saida, f, separators=(",", ":"))
for k, v in pecas.items():
    print(f"{k:8s} pontos={len(v['p']):4d} pix={v['n']}")
print("tamanho", os.path.getsize(os.path.join(AQUI, "dualsense.json")))

# Conferência visual
from PIL import ImageDraw
tela = Image.new("RGB", (W * 2, H * 2), "#101018")
d = ImageDraw.Draw(tela)
CORES = {"corpo": "#ffffff", "asaE": "#7fd0ff", "asaD": "#7fd0ff", "centro": "#ffb01f", "touch": "#a78bfa"}
for k, v in pecas.items():
    pts = [(a * 2, b * 2) for a, b in v["p"]]
    d.line(pts + [pts[0]], fill=CORES.get(k, "#4ade80"), width=2)
tela.save(os.path.join(os.environ.get("CONF", AQUI), "conferencia-contornos.png"))
