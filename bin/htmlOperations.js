const { parseHTML } = require("linkedom")
const kebabCase = require("lodash.kebabcase")

const createHtmlFrame = ({ content, title, fileMeta, description = "" }) =>
  `
  <html lang="en-US">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <meta name="description" content="${title}">
    <meta property="og:title" content="${title}" />
    <meta property="og:url" content="https://pravinbashyal.com" />
    <meta property="og:description" content="${description}" />
    <meta property="twitter:title" content="${title}" />
    <meta property="twitter:url" content="https://pravinbashyal.com" />
    <meta property="twitter:description" content="${description}" />
    <title>
      ${title}
    </title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;1,300&family=Source+Sans+Pro:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/night-owl.min.css">
    <style>
      :root {
        --primary-text-color: rgb(32, 33, 36);
        --secondary-text-color: rgba(32, 33, 36, 0.9);
        --code-font-size: 0.8rem;
      }

      html {
        font-size: 115%;
        color: var(--primary-text-color);
        font-family:  Mulish,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        font-weight: 300;
      }

      body {
        max-width: 70ch;
        margin: 0 auto;
        font-size: 1rem;
        line-height: 1.6;
      }

      article a {
        text-decoration: none;
        color: #1a73e8;
      }

      header {
        font-family: 'Source Sans Pro', sans-serif;
      }

      header.page-header {
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin: 0 1rem;
        font-size: 1rem;
      }

      .page-header strong {
        color: black;
      }

      footer {
        height: 6rem;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 1rem;
      }

      nav {
        padding: 1rem 0;
        display: flex;
        flex: 8;
      }

      p {
        max-width: 70ch;
        margin: 1.6rem 0;
      }

      header.page-header nav>a {
        text-decoration: none;
        margin-right: 1.25rem;
        color: var(--primary-text-color);
        line-height: 1;
      }

      header.page-header nav>a:last-child {
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
        padding-left:0.75rem;
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
        margin: 1rem 0 2.5rem 0rem;
      }

      h2 {
        font-size: 1.875rem;
        margin-top: 3rem;
      }

      h3 {
        font-size: 1.5rem;
        margin-top: 2rem;
      }

      h4, h5, h6 {
        font-size: 1.3125rem;
      }

      h1, h2, h3, h4, h5, h6 {
        line-height: 1.2;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: bold;
      }

      h2 a {
        visibility: hidden;
        color: var(--primary-text-color);
        padding: 0 0.25rem;
      }

      h2:hover a {
        visibility: visible;
      }

      h2 a:hover {
        text-decoration: underline;
        text-decoration-thickness: from-font;
      }

      .home {
        margin-right: 1rem;
        text-decoration: none;
        color: var(--primary-text-color);
      }

      .timestamp * {
        color: inherit;
        font-size: inherit;
      }

      .timestamp {
        font-size: 0.8rem;
        margin: -2.25rem 0 2.25rem 0;
        color: var(--secondary-text-color);
        padding-left: 0.25rem;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
      }

      strong {
        font-weight: bold;
      }

      code {
        font-family: 'Roboto Mono', monospace;
        font-size: var(--code-font-size);
        background: rgba(32, 33, 36, 0.09);
        border-radius: 5px;
        padding: 0.25rem;
      }

      pre code {
        -webkit-box-shadow: 0px 0px 6px 0px rgba(2,35,19,0.24);
        box-shadow: 0px 0px 6px 0px rgba(2,35,19,0.24);
        border-radius: 6px;
        padding: 1.25rem !important;
      }

      code * {
        font-family: inherit;
        font-size: var(--code-font-size);
        font-weight: 400;
      }

      blockquote {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.85rem;
        margin: 2rem;
      }

      blockquote p {
        color: var(--secondary-text-color);
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
          margin: 2rem 0.5rem;
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

      article img {
        width: 100%;
        height: 100%;
      }

    </style>
  </head>
  <body>
  <header class="page-header">
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
      <a href="https://twitter.com/pravinbashyal" title="twitter" target="_blank" rel="me noopener noreferrer">
        <span class="icon-button-label">
          Twitter
        </span>
        <img style="margin-bottom: -1px;" src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/twitter.svg" alt="twitter icon">
        </img>
      </a>
      <a href="https://github.com/pravinbashyal" title="github" target="_blank" rel="me noopener noreferrer">
        <span class="icon-button-label">
          Github
        </span>
        <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg" alt="github icon">
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

const documentFromHtmlString = ({ content, title, fileMeta, description }) => {
  const { document } = parseHTML(
    createHtmlFrame({ content, title, fileMeta, description })
  )
  return document
}

const withDoctype = (html, doctype) => `<!DOCTYPE ${doctype}> ${html}`

const addLinkInTextElement = (document) => (element) => {
  const { textContent } = element
  const id = kebabCase(textContent)
  element.setAttribute("id", id)
  const link = document.createElement("a")
  link.setAttribute("aria-hidden", "true")
  link.appendChild(document.createTextNode("#"))
  link.href = `#${id}`
  element.appendChild(link)
}

const addHeaderLinks = (document) => {
  const headerTwos = document.querySelectorAll("h2")
  headerTwos.forEach(addLinkInTextElement(document))
  return document
}

module.exports = {
  documentFromHtmlString,
  withDoctype,
  addHeaderLinks,
}
