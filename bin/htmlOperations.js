const { parseHTML } = require("linkedom")

const createHtmlFrame = ({ content, title, fileMeta }) =>
  `
  <!DOCTYPE html>
  <html lang="en-US">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Author: Pravin Bashyal(pravin.bashyal@gmail.com), ${title}">
    <title>
      ${title}
    </title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/paraiso-light.min.css">
    <style>
      header {
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin: 0 1rem;
      }

      header *:last-child {
        margin-right: 0;
      }

      nav {
        padding: 1rem 0;
        display: flex;
        flex: 8;
      }

      header nav>a {
        text-decoration: none;
        margin-right: 2rem;
      }

      header nav>a:last-child {
        margin-right: none;
      }

      header section>a {
        text-decoration: none;
        margin: 0.5rem;
      }

      .social {
        flex: 2;
        display: flex;
        justify-content: flex-end;
      }

      main {
        float: none !important;
        margin: 0 1rem;
      }

      main li {
        margin-top: 0.5rem;
      }

      body {
        max-width: 850px;
        margin: 0 auto;
      }

      body * {
        font-family: 'Roboto', sans-serif;
        font-weight: light;
        color: rgb(32, 33, 36);
      }

      body h1, h2, h3, h4, h5, h6 {
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: regular;
      }

      .home {
        margin-right: 1rem;
        text-decoration: none;
        color: black;
      }

      .timestamp * {
        color: inherit;
        font-size: inherit;
      }

      .timestamp {
        font-size: 0.8rem;
        margin: -0.75rem 0 1.5rem 0;
        color: rgba(50,50,50,0.8);
      }

      code {
        font-family: 'Roboto Mono', monospace;
      }

      code * {
        font-family: inherit;
        font-size: 1rem;
      }
    </style>
  </head>
  <body>
  <header>
    <nav>
      <a href="/" class="home">
        <strong>
          Pravin Bashyal
        </strong>
      </a>
      <a href="/blogs">
        Blogs
      </a>
    </nav>
    <section class="social" aria-label="social">
      <a href="https://twitter.com">
        Twitter
      </a>
      <a href="https://twitter.com">
        Github
      </a>
    </section>
  </header>
  <main>
    <article>
      ${content}
    </article>
  </main>
   <footer>
   </footer>
  </body>
  </html>
  `

const documentFromHtmlString = ({ content, title, fileMeta }) => {
  const { document } = parseHTML(createHtmlFrame({ content, title, fileMeta }))
  return document
}

module.exports = {
  documentFromHtmlString,
}
