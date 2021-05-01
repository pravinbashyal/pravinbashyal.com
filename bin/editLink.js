const addEditLinkToFooter = (document, link) => {
  const footer = document.querySelector("footer")
  const editLink = document.createElement("a")
  editLink.href = link
  editLink.target = "_"
  editLink.appendChild(document.createTextNode("Suggest Edits"))
  editLink.setAttribute("rel", "noopener noreferrer")
  footer.appendChild(editLink)
}

module.exports = {
  addEditLinkToFooter,
}
