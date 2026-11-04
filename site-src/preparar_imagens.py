# Gera img/: telas do sistema (capturas reais do Switch, pasta print do projeto), telas do app (prévia do app, dist/previa-telas),
# logo do app e logo da Dat Zero.
# Nomes descritivos porque o Google lê o nome do arquivo. Uso: python site-src/preparar_imagens.py <logo da Dat Zero>
import os
import sys

from PIL import Image, ImageDraw

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.join(AQUI, "..")
PRINTS = os.path.join(RAIZ, "..", "..", "print")
IMG = os.path.join(RAIZ, "img")
os.makedirs(IMG, exist_ok=True)

TELAS = {
    "2026101507514100": "menu-homebrew-com-control-ps5-no-nintendo-switch",
    "2026101508032900": "tela-controles-do-nintendo-switch-mudar-ordem",
    "2026101508034200": "aperte-l-e-r-para-sincronizar-controle-ps5-no-switch",
}
for orig, nome in TELAS.items():
    Image.open(os.path.join(PRINTS, orig + ".jpg")).convert("RGB").save(os.path.join(IMG, nome + ".webp"), quality=80, method=6)

# Telas do app: as da interface atual, geradas pela prévia do app (mesmo código de desenho do console)
PREVIA = os.path.join(RAIZ, "..", "dist", "previa-telas")
TELAS_APP = {
    "00c-abertura": "abertura-do-app-control-ps5",
    "01-inicio-instalar": "app-control-ps5-instalar-driver-dualsense",
    "14-instalando": "instalando-driver-dualsense-no-switch",
    "15-instalado": "driver-instalado-reiniciar-o-switch",
    "03-inicio-sem-controle": "driver-ativo-parear-controle-ps5",
    "05-inicio-conectado": "dualsense-conectado-no-nintendo-switch",
    "06-gatilhos-l2": "gatilhos-adaptaveis-do-dualsense-no-switch",
    "09-luzes": "barra-de-luz-e-vibracao-do-dualsense-no-switch",
}
for orig, nome in TELAS_APP.items():
    Image.open(os.path.join(PREVIA, orig + ".png")).convert("RGB").save(os.path.join(IMG, nome + ".webp"), quality=80, method=6)


def icone(lado, saida):
    """Gato do app sobre o fundo roxo-escuro dos outros sites, com cantos arredondados."""
    k = 4
    g = Image.new("RGB", (1, 256))
    for y in range(256):
        t = y / 255
        g.putpixel((0, y), (round(42 + (13 - 42) * t), round(23 + (8 - 23) * t), round(107 + (36 - 107) * t)))
    fundo = g.resize((lado * k, lado * k)).convert("RGBA")
    logo = Image.open(os.path.join(RAIZ, "assets", "logo.png")).convert("RGBA")
    # roxo do gato clareado, para aparecer sobre o fundo escuro
    px = logo.load()
    for y in range(logo.height):
        for x in range(logo.width):
            r, gg, b, a = px[x, y]
            if a and r < 200:
                px[x, y] = (min(255, int(r * 1.15 + 42)), min(255, int(gg * 1.15 + 30)), 255, a)
    m = int(lado * k * 0.84)
    logo = logo.resize((m, m), Image.LANCZOS)
    fundo.alpha_composite(logo, ((lado * k - m) // 2, (lado * k - m) // 2))
    masc = Image.new("L", fundo.size, 0)
    ImageDraw.Draw(masc).rounded_rectangle((0, 0, lado * k - 1, lado * k - 1), radius=int(lado * k * 0.24), fill=255)
    fundo.putalpha(masc)
    fundo.resize((lado, lado), Image.LANCZOS).save(os.path.join(IMG, saida))


icone(180, "icon-180.png")
icone(192, "icon-192.png")
icone(512, "icon-512.png")

if len(sys.argv) > 1:
    dz = Image.open(sys.argv[1]).convert("RGB")
    dz.thumbnail((720, 720), Image.LANCZOS)
    dz.save(os.path.join(IMG, "dat-zero-games-logo.webp"), quality=86, method=6)

for f in sorted(os.listdir(IMG)):
    print(f"{os.path.getsize(os.path.join(IMG, f)) // 1024:5d} KB  {f}")
