const createDateNodeInDocument = document => (dateString, label) => {
  const container = document.createElement("p")
  container.classList.add("timestamp")
  container.appendChild(document.createTextNode(label))
  const date = document.createElement("date")
  date.appendChild(document.createTextNode(dateString))
  date.setAttribute("dateTime", dateString)

  container.appendChild(date)
  return container
}

const formatDate = dateString => {
  return new Date(dateString).toLocaleDateString("en-DE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

const createTimestampsManager = ({ createdAt, modifiedAt }) => document => {
  const title = document.querySelector("h1")
  console.log({ title })
  if (!title) return
  const timestampNode = createDateNodeInDocument(document)
  const timestampElement = timestampNode(formatDate(createdAt), "Published: ")
  if (modifiedAt) {
    const modifiedAtContainer = document.createElement("span")
    modifiedAtContainer.appendChild(document.createTextNode(" ( Updated: "))
    const modifiedAtDate = document.createElement("date")
    modifiedAtDate.appendChild(document.createTextNode(formatDate(modifiedAt)))
    modifiedAtDate.setAttribute("dateTime", modifiedAt)
    modifiedAtContainer.appendChild(modifiedAtDate)
    modifiedAtContainer.appendChild(document.createTextNode(" )"))
    timestampElement.appendChild(modifiedAtContainer)
  }
  title.insertAdjacentElement("afterend", timestampElement)
  return document
}

module.exports = { createTimestampsManager }
