import state from '../model/State';

export default function(props) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Violet</title>
      <link rel="stylesheet" href="/css/index.css">
      <link rel="stylesheet" href="/css/menu.css">
    </head>

    <body>

      <nav id="menu" class="menu">${state.menu.body}</nav>
      <nav id="toc" class="menu">${state.toc.body}</nav>

      ${props.children}

      <script type="module">
        /*import State from './State.js';

        document.getElementById('article').innerHTML = State.article.body;
        document.getElementById('menu').innerHTML = State.menu.body;
        document.getElementById('toc').innerHTML = State.toc.body;*/
      </script>
    </body>
    </html>`
}