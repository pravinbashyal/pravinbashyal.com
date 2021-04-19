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
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://pravinbashyal.com/styles.css">
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
      <a href="https://twitter.com/pravinbashyal">
        Twitter
      </a>
      <a href="https://github.com/pravinbashyal">
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

const withDoctype = (html, doctype) => `<!DOCTYPE ${doctype}> ${html}`

module.exports = {
  documentFromHtmlString,
  withDoctype,
}
