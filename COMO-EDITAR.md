# Como editar o portfólio

O site é feito só com HTML, CSS e um pouco de JavaScript. Não precisa instalar nada.

## Onde fica cada coisa

```
html/
├── index.html                    página inicial
├── projeto-agente-ia.html        uma página para cada projeto
├── projeto-banco-de-dados.html
├── projeto-estacionamento.html
├── projeto-prototipo-figma.html
├── projeto-tcc-mecatronica.html
└── assets/
    ├── css/style.css             todo o visual do site
    ├── js/main.js                menu do celular e animação ao rolar
    ├── imagens/                  imagens (.webp é a versão leve usada no site)
    ├── pdf/                      currículo
    └── videos/
```

## Ver o site no computador

Abra `html/index.html` com dois cliques no navegador. Para algo mais parecido com o site
publicado, no VS Code instale a extensão **Live Server**, clique com o botão direito em
`index.html` e escolha **Open with Live Server**.

## Editar um texto

1. Abra o arquivo `.html` da página.
2. Procure o texto com Ctrl+F.
3. Troque só o que está entre as tags, por exemplo entre `<p>` e `</p>`.
4. Salve e atualize o navegador.

Cuidado para não apagar um `<` ou `>`. Se a página ficar estranha, desfaça com Ctrl+Z.

## Trocar uma imagem

1. Coloque a imagem nova em `html/assets/imagens/`. Use nomes sem espaço e sem acento,
   por exemplo `meu-projeto.png`. Atenção: o Netlify diferencia maiúsculas de minúsculas,
   então `Foto.png` e `foto.png` são arquivos diferentes.
2. No HTML, troque o caminho em `src="assets/imagens/..."`.
3. Atualize o `alt`, que descreve a imagem para quem usa leitor de tela.
4. Atualize `width` e `height` com o tamanho real da imagem em pixels (clique com o botão
   direito no arquivo, Propriedades, Detalhes). Isso evita que a página "pule" ao carregar.

Dica: imagens grandes deixam o site lento. Tente manter cada uma abaixo de 300 KB.
Sites como squoosh.app convertem para `.webp`, que fica bem menor.

## Adicionar um projeto novo

### 1. O cartão na página inicial

Em `html/index.html`, logo acima da lista de projetos, há um comentário
"COMO ADICIONAR UM PROJETO NOVO" com um cartão pronto para copiar. Copie o bloco `<li> ... </li>`,
cole dentro de `<ul class="projetos-lista">` e troque cor, imagem, título, tags e link.

Cores disponíveis: `cor-sol`, `cor-lilas`, `cor-lima`, `cor-bege`, `cor-musgo`.

### 2. A página do projeto

1. Copie uma página parecida, por exemplo `projeto-banco-de-dados.html`, e salve com o
   nome novo, por exemplo `projeto-meu-app.html`.
2. Troque o `<title>` e a `<meta name="description">` no topo do arquivo.
3. Troque o rótulo, o `<h1>` (só pode existir um por página), o resumo, a imagem,
   a ficha (`<dl>`) e os textos.
4. O link do cartão na página inicial deve apontar para o nome novo.

## Mudar uma cor no site todo

No começo de `assets/css/style.css` estão as variáveis de cor, como `--musgo: #3F5036;`.
Trocando o valor ali, a cor muda em todo o site.

## Publicar

1. Confira as mudanças no navegador.
2. `git add .` e `git commit -m "descreva o que mudou"`.
3. `git push`. Se o Netlify estiver ligado a este repositório do GitHub, ele publica sozinho
   depois do push. Se não estiver, a publicação é feita pelo painel do Netlify.
