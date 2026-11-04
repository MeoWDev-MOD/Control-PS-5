# Fontes do site

O site é publicado direto da raiz deste repositório (GitHub Pages, branch `main`). HTML, CSS e JS ficam prontos em `index.html`, `css/` e `js/`, sem etapa de build, menos o 3D:

- `cena3d.js`: a cena do Nintendo Switch (3D) e do controle de PS5. Gera `js/cena3d.js`, com o Three.js junto:
  `NODE_PATH="<pasta com three instalado>/node_modules" esbuild site-src/cena3d.js --bundle --minify --format=esm --target=es2020 --outfile=js/cena3d.js`
- `frente.json` e `img/dualsense-frente.webp`: o controle, o mesmo desenho de frente do app, separado em peças. Os dois são gerados por `app/tools/gerar_controle2d.py`, fora deste repositório. No site, como no app, o controle fica de frente e só balança de leve.
- `preparar_imagens.py`: gera `img/`. As telas do sistema (menu Homebrew, tela Controles) são capturas reais do Switch, da pasta `print` do projeto. As telas do app vêm da prévia do app (`dist/previa-telas`), que usa o mesmo código de desenho do console, com dados de exemplo.

Na tela do Switch aparecem as telas do app, na ordem do tutorial (`TELAS` e `aplica` em `cena3d.js`). A cena não traz logo da Nintendo nem da Sony.

A capa do palco (`img/controle-de-ps5-conectado-no-nintendo-switch-3d.webp`) e a imagem de compartilhamento (`img/og.jpg`) são capturas da própria cena. Refaça as duas quando o controle ou as telas mudarem.

Anúncios: lugar `control-site` do CRM, dois espaços deitados (`adSlotRecursos` e `adSlotFaq`). Sem anúncio marcado para esse lugar, os espaços ficam escondidos.

O site divide o domínio com os outros projetos: tudo que fica no navegador usa chaves próprias, `ctl.*` e `ctl-*`.

No bloco da Dat Zero Games não se fala de jogos, em texto ou imagem: é regra do dono.

## SEO

Título, descrição e dados estruturados ficam no `<head>` do `index.html`. As perguntas do bloco `FAQPage` têm de ser iguais às da seção Dúvidas da página: quando mudar uma, mude a outra. O Google não mostra mais os realces de perguntas e de passo a passo, e nota do app só entra se existir avaliação de verdade. `sitemap.xml` lista a página e as imagens; atualize `lastmod` quando a página mudar.

## Aviso legal

A seção `#aviso-legal` e os Termos falam só pelo projeto, não em nome da loja de desbloqueio. Cite as leis pelo que elas dizem, sem afirmar que protegem o projeto: nenhuma trata de desbloqueio de console ou de engenharia reversa, e o art. 107 da Lei 9.610/1998 pode pesar contra. Mudou os Termos? Troque `TERMS_VERSION` em `js/consent.js`.
