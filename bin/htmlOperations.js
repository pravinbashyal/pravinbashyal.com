const { parseHTML } = require("linkedom")

const createHtmlFrame = ({ content, title }) =>
  `
  <!DOCTYPE html>
  <html lang="en-US">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Author: Pravin Bashyal(pravin.bashyal@gmail.com), ${title}">
    <title>
      ${title}
    </title>
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

      .home {
        margin-right: 1rem;
        text-decoration: none;
        color: black;
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

const documentFromHtmlString = ({ content, title }) => {
  const { document } = parseHTML(createHtmlFrame({ content, title }))
  return document
}

module.exports = {
  documentFromHtmlString,
}
