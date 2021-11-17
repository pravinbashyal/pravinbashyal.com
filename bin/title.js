let title = ""

const setTitle = (titleString) => {
  title = titleString
}

const getTitle = () => title

let description = ""

const setDescription = (descriptionString) => {
  description = descriptionString
}

const getDescription = () => description

module.exports = {
  setTitle,
  getTitle,
  setDescription,
  getDescription,
}
