# Print do menu Homebrew com o foco só no Control PS-5: o resto da lista fica desfocado e escuro, sem nome legível.
# O print real mostra outros homebrews do console (como instaladores e geradores), que não têm relação com o projeto
# e destoam do aviso legal da página. Uso: python site-src/foco_homebrew.py
import os

from PIL import Image, ImageChops, ImageDraw, ImageFilter

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.join(AQUI, "..")
ORIGEM = os.path.join(RAIZ, "..", "..", "print", "2026101507514100.jpg")

LISTA = (28, 88, 1252, 645)     # área da lista, entre as linhas do cabeçalho e do rodapé (print de 1280x720)
APP = (70, 435, 450, 600)       # cartão do Control PS-5, com a borda de seleção


def foco(im):
    im = im.convert("RGB")
    borrado = im.filter(ImageFilter.GaussianBlur(17))
    borrado = ImageChops.multiply(borrado, Image.new("RGB", im.size, (112, 112, 122)))
    # máscara: branco = fica borrado; a borda suave evita um corte seco na volta da lista
    k = 3
    m = Image.new("L", (im.width * k, im.height * k), 0)
    d = ImageDraw.Draw(m)
    d.rectangle([v * k for v in LISTA], fill=255)
    d.rounded_rectangle([v * k for v in APP], radius=6 * k, fill=0)
    m = m.resize(im.size, Image.LANCZOS).filter(ImageFilter.GaussianBlur(0.8))
    return Image.composite(borrado, im, m)


if __name__ == "__main__":
    novo = foco(Image.open(ORIGEM))
    novo.save(os.path.join(RAIZ, "img", "menu-homebrew-com-control-ps5-no-nintendo-switch.webp"), quality=82, method=6)
    novo.save(os.path.join(RAIZ, "assets", "screens", "homebrew.jpg"), quality=86, optimize=True)
    print("ok")
