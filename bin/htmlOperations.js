const { parseHTML } = require("linkedom")

const createHtmlFrame = ({ content, title, fileMeta }) =>
  `
  <html lang="en-US">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Author: Pravin Bashyal(pravin.bashyal@gmail.com), ${title}">
    <title>
      ${title}
    </title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/night-owl.min.css">
    <style>
      html {
        font-size: 100%;
      }

      body {
        max-width: 850px;
        margin: 0 auto;
        font-size: 1rem;
      }

      body * {
        font-family: 'Roboto', sans-serif;
        font-weight: light;
        color: rgb(32, 33, 36);
      }

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

      p {
        line-height: 1.5;
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
        margin-bottom: 0.6rem;
      }

      main ul {
        margin-bottom: 1rem;
      }

      h1 {
        font-size: 2.25rem;
      }

      h2 {
        font-size: 1.875rem;
      }

      h3 {
        font-size: 1.5rem;
      }

      h4, h5, h6 {
        font-size: 1.3125rem;
      }

      h1, h2, h3, h4, h5, h6 {
        line-height: 1.2;
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
        margin: -1.2rem 0 1.5rem 0;
        color: rgba(50,50,50,0.8);
        padding-left: 0.25rem;
      }

      code {
        font-family: 'Roboto Mono', monospace;
        border-radius: 6px;
      }

      pre code {
        -webkit-box-shadow: 0px 0px 6px 0px rgba(2,35,19,0.24);
        box-shadow: 0px 0px 6px 0px rgba(2,35,19,0.24);
      }

      code * {
        font-family: inherit;
        font-size: 1rem;
      }

      blockquote {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        margin: 1.5rem 2rem;
      }

      blockquote p {
        font-weight: lighter;
      }

      blockquote>p::before {
        content: '"';
        margin-right: 0.5rem;
        font-size: 2rem;
        font-family: 'Roboto Mono', monospace;
      }

      blockquote>p::after {
        content: '"';
        margin-left: 0.5rem;
        font-size: 2rem;
        font-family: 'Roboto Mono', monospace;
      }

      @media (max-width: 768px) {
        blockquote {
          margin: 1.5rem 0.5rem;
        }
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
