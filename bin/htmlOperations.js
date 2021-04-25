const { parseHTML } = require("linkedom")
const kebabCase = require("lodash.kebabcase")

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
        font-size: 110%;
        color: rgb(32, 33, 36);
        font-family: 'Roboto', sans-serif;
        font-weight: light;
      }

      body {
        max-width: 90ch;
        margin: 0 auto;
        font-size: 1rem;
      }

      article a {
        text-decoration: none;
        color: #1a73e8;
      }

      header {
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin: 0 1rem;
        font-size: 1rem;
      }

      footer {
        height: 6rem;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
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
        color: rgb(32, 33, 36);
      }

      header nav>a:last-child {
        margin-right: none;
      }

      .social a {
        text-decoration: none;
        margin: 0 0.25rem;
        box-sizing: border-box;
      }

      .social a:hover {
        border-bottom: 4px solid rgba(0,0,0,0);
      }

      .social {
        flex: 2;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }

      .social img {
        height: 1.25rem;
        width: 1.5rem;
        padding:0 0.5rem;
      }

      main {
        float: none !important;
        margin: 0 1rem;
      }

      main li {
        margin-bottom: 0.6rem;
      }

      main ul,ol {
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

      h2 a {
        visibility: hidden;
        color: black;
        padding: 0 0.25rem;
      }

      h2 a:hover {
        text-decoration: underline;
        text-decoration-thickness: from-font;
      }

      h2:hover a {
        visibility: visible;
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
        color: rgba(50,50,50,0.9);
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

      .icon-button-label {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
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
      <a href="https://twitter.com/pravinbashyal" title="twitter" rel="me noopener">
        <span class="icon-button-label">
          Twitter
        </span>
        <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/twitter.svg" alt="twitter icon">
        </img>
      </a>
      <a href="https://github.com/pravinbashyal" title="github" rel="me noopener">
        <span class="icon-button-label">
          Github
        </span>
        <img style="margin-bottom: 2px;" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg" alt="github icon">
        </img>
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

const addLinkInTextElement = document => element => {
  const { textContent } = element
  const id = kebabCase(textContent)
  element.setAttribute("id", id)
  const link = document.createElement("a")
  link.setAttribute("aria-hidden", "true")
  link.appendChild(document.createTextNode("#"))
  link.href = `#${id}`
  element.appendChild(link)
}

const addHeaderLinks = document => {
  const headerTwos = document.querySelectorAll("h2")
  headerTwos.forEach(addLinkInTextElement(document))
  return document
}

module.exports = {
  documentFromHtmlString,
  withDoctype,
  addHeaderLinks,
}
