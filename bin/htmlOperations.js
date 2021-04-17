const { parseHTML } = require("linkedom")

const createHtmlFrame = ({ content, title }) =>
  `
  <!DOCTYPE html>
  <html lang="en-US">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
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
