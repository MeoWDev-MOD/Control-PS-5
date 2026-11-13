# Gera a imagem de compartilhamento do Control PS-5 em inglês, espanhol e russo, a partir de img/og.jpg:
# apaga o texto da esquerda refazendo o fundo (superfície de Coons entre as bordas limpas) e escreve o texto
# traduzido por cima, com o Chrome. Uso: python site-src/i18n/og.py   (precisa do Google Chrome, numpy e Pillow)
import os
import subprocess
import tempfile

import numpy as np
from PIL import Image, ImageFilter

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.abspath(os.path.join(AQUI, "..", ".."))
IMG = os.path.join(RAIZ, "img")
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
FONTES = "F:/PROJECT IDE/CRM Perssoal/src/assets/fonts"  # Inter (só letras latinas; o russo usa Segoe UI)

TEXTOS = {
    "en": ("Hacked Switch", "PS5 controller on the", "Nintendo Switch", "Adaptive triggers, light bar and per-game profiles.", "Free app"),
    "es": ("Switch desbloqueada", "Control de PS5 en la", "Nintendo Switch", "Gatillos adaptativos, barra de luz y perfil por juego.", "App gratis"),
    "ru": ("Прошитая Switch", "Геймпад PS5 на", "Nintendo Switch", "Адаптивные триггеры, световая панель и профиль для каждой игры.", "Бесплатно"),
}


def limpa(arq, caixas):
    im = np.asarray(Image.open(arq).convert("RGB")).astype(float)
    out = im.copy()
    for x0, y0, x1, y1 in caixas:
        esq = im[y0:y1, x0 - 3:x0].mean(axis=1)[:, None, :]
        dir_ = im[y0:y1, x1:x1 + 3].mean(axis=1)[:, None, :]
        topo = im[y0 - 3:y0, x0:x1].mean(axis=0)[None, :, :]
        base = im[y1:y1 + 3, x0:x1].mean(axis=0)[None, :, :]
        s = np.linspace(0, 1, x1 - x0)[None, :, None]
        t = np.linspace(0, 1, y1 - y0)[:, None, None]
        c00, c10 = im[y0 - 2, x0 - 2], im[y0 - 2, x1 + 1]
        c01, c11 = im[y1 + 1, x0 - 2], im[y1 + 1, x1 + 1]
        cantos = (1 - s) * (1 - t) * c00 + s * (1 - t) * c10 + (1 - s) * t * c01 + s * t * c11
        out[y0:y1, x0:x1] = (1 - s) * esq + s * dir_ + (1 - t) * topo + t * base - cantos
    res = Image.fromarray(out.clip(0, 255).astype("uint8"))
    suave = res.filter(ImageFilter.GaussianBlur(6))
    mascara = Image.new("L", res.size, 0)
    for x0, y0, x1, y1 in caixas:
        mascara.paste(255, (x0, y0, x1, y1))
    res.paste(suave, (0, 0), mascara.filter(ImageFilter.GaussianBlur(3)))
    return res


def html(fundo, lang):
    kicker, t1, t2, sub, botao = TEXTOS[lang]
    fonte = "'Segoe UI',Inter" if lang == "ru" else "Inter,'Segoe UI'"
    tam = 50 if lang == "ru" else 54
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{{font-family:Inter;font-weight:700;src:url("file:///{FONTES}/inter-latin-700-normal.woff")}}
@font-face{{font-family:Inter;font-weight:800;src:url("file:///{FONTES}/inter-latin-800-normal.woff")}}
@font-face{{font-family:Inter;font-weight:400;src:url("file:///{FONTES}/inter-latin-400-normal.woff")}}
html,body{{margin:0;width:1200px;height:630px;overflow:hidden}}
body{{position:relative;background:url("file:///{fundo}") 0 0/1200px 630px;color:#fff;font-family:{fonte}}}
.k{{position:absolute;left:56px;top:70px;font-weight:800;font-size:18px;letter-spacing:.14em;text-transform:uppercase;color:#b9a6ff}}
.t{{position:absolute;left:54px;top:112px;font-weight:800;font-size:{tam}px;line-height:1.18;letter-spacing:-.01em;width:600px}}
.t b{{display:block;color:#a78bfa;background:linear-gradient(90deg,#b49cff,#8b5cf6);-webkit-background-clip:text;background-clip:text;color:transparent}}
.s{{position:absolute;left:56px;top:258px;font-weight:400;font-size:24px;line-height:1.35;color:#d6cff5;width:520px}}
.b{{position:absolute;left:56px;top:346px;padding:0 30px;height:60px;line-height:60px;border-radius:999px;font-weight:700;font-size:21px;
background:linear-gradient(90deg,#7c3aed,#a855f7);box-shadow:0 10px 30px rgba(124,58,237,.45)}}
</style></head><body><div class="k">{kicker}</div><div class="t">{t1}<b>{t2}</b></div><div class="s">{sub}</div><div class="b">{botao}</div></body></html>"""


def main():
    with tempfile.TemporaryDirectory() as tmp:
        fundo = os.path.join(tmp, "fundo.png")
        limpa(os.path.join(IMG, "og.jpg"), [(40, 56, 640, 420)]).save(fundo)
        for lang in TEXTOS:
            h = os.path.join(tmp, f"og-{lang}.html")
            open(h, "w", encoding="utf-8").write(html(fundo.replace("\\", "/"), lang))
            png = os.path.join(tmp, f"og-{lang}.png")
            subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
                            "--allow-file-access-from-files", f"--screenshot={png}", "--window-size=1200,630",
                            "file:///" + h.replace("\\", "/")], check=True, capture_output=True)
            destino = os.path.join(IMG, f"og-{lang}.jpg")
            Image.open(png).convert("RGB").crop((0, 0, 1200, 630)).save(destino, "JPEG", quality=88, optimize=True)
            print(destino, os.path.getsize(destino) // 1024, "KB")


if __name__ == "__main__":
    main()
