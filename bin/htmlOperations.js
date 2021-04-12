const { parseHTML } = require("linkedom")

const createHtmlFrame = ({ content, title }) =>
  `
  <html>
  <head>
    <title>
    ${title}
    </title>
  </head>
  <body>
   ${content}
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
