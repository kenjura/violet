export default function(props) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Violet</title>
      <link rel="stylesheet" href="/css/index.css">
      <link rel="stylesheet" href="/css/menu.css">
      <style>
      ${props.style.source}
      </style>
    </head>

    <body>

      <nav id="menu" class="menu">${props.menu.body}</nav>
      <nav id="toc" class="menu">${props.toc}</nav>

      ${props.children}

      <script type="module">
        window.v = ${JSON.stringify(props)}
      </script>
    </body>
    </html>`
}