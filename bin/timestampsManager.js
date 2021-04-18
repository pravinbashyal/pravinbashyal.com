const createDateNodeInDocument = document => (dateString, label) => {
  const container = document.createElement("p")
  container.appendChild(document.createTextNode(label))
  const date = document.createElement("date")
  date.appendChild(document.createTextNode(dateString))
  date.setAttribute("dateTime", dateString)

  container.appendChild(date)
  return container
}

const createTimestampsManager = ({ createdAt, modifiedAt }) => document => {
  const title = document.querySelector("h1")
  console.log({ title })
  if (!title) return
  const createDateNode = createDateNodeInDocument(document)
  const createdAtElement = createDateNode(createdAt, "- Created At: ")
  if (modifiedAt) {
    const modifiedAtElement = createDateNode(modifiedAt, "- Modified At: ")
    title.insertAdjacentElement("afterend", modifiedAtElement)
  }
  title.insertAdjacentElement("afterend", createdAtElement)
  return document
}

module.exports = { createTimestampsManager }
