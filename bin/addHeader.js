const { parseHTML } = require("linkedom")

const createHtmlFrame = content =>
  `
  <html>
  <head>

  </head>
  <body>
   ${content}
  </body>
  </html>
  `

module.exports = htmlString => {
  const container = parseHTML(createHtmlFrame(htmlString))
}
