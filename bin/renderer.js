const hljs = require("highlight.js")

module.exports = setTitle => ({
  heading(text, level) {
    if (level === 1) {
      console.log("title: ", { text })
      setTitle(text)
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
