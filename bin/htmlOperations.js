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
  </head>
  <body>
  <header>
    <nav>
      <ul>
        <li>
          <a href="/">
            About Me
          </a>
        </li>
        <li>
          <a href="/blogs">
            Blogs
          </a>
        </li>
      </ul>
    </nav>
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
