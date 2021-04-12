module.exports = setTitle => ({
  heading(text, level) {
    if (level === 1) {
      console.log("title: ", { text })
      setTitle(text)
    }
    return `
            <h${level}>
              ${text}
            </h${level}>`
  },
})
