# Fontes do site

O site é publicado direto da raiz deste repositório (GitHub Pages, branch `main`). HTML, CSS e JS ficam prontos em `index.html`, `css/` e `js/`, sem etapa de build, menos o 3D:

- `cena3d.js`: modelos 3D do Nintendo Switch e do controle de PS5. Gera `js/cena3d.js`, com o Three.js junto:
  `NODE_PATH="<pasta com three instalado>/node_modules" esbuild site-src/cena3d.js --bundle --minify --format=esm --target=es2020 --outfile=js/cena3d.js`
- `dualsense.json`: contorno de cada peça do controle, medido do desenho usado no próprio app por `tracar_controle.py` (`assets/controller.png`). É isso que mantém as peças nos lugares certos.
- `preparar_imagens.py`: gera `img/` a partir das capturas reais do Switch (pasta `print` do projeto) e das logos.

Na tela do Switch aparecem as capturas reais do app, na ordem do tutorial (`TELAS` e `aplica` em `cena3d.js`). O modelo não traz logo da Nintendo nem da Sony.

Anúncios: lugar `control-site` do CRM, dois espaços deitados (`adSlotRecursos` e `adSlotFaq`). Sem anúncio marcado para esse lugar, os espaços ficam escondidos.

O site divide o domínio com os outros projetos: tudo que fica no navegador usa chaves próprias, `ctl.*` e `ctl-*`.

No bloco da Dat Zero Games não se fala de jogos, em texto ou imagem: é regra do dono.
