const hljs = require("highlight.js")

module.exports = (setTitle, setDescription) => ({
  html(text) {
    const parsedText = text.replace("<!--", "").replace("-->", "")
    console.log()
    if (parsedText.trim().substring(0, 17) === "description-start") {
      setDescription(
        parsedText.substring(18).split("description-end")[0].trim()
      )
      return ""
    }
    return text
  },
  heading(text, level) {
    if (level === 1) {
      setTitle(text)
      return `<header><h${level}>${text}</h${level}></header>`
    }
    return `<h${level}>${text}</h${level}>`
  },
  code(code, infostring, escaped) {
    const codeHtml = `<pre><code class="language-${infostring} hljs">${
      hljs.highlight(code, { language: "typescript" }).value
    }</code></pre>`
    return codeHtml
  },
})
