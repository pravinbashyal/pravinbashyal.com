const marked = require("marked")

const renderer = {
  heading: (text, level) => {},
}

marked.use(renderer)

console.log(marked("# html"))
