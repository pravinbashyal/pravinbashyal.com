const createDateNodeInDocument = document => (dateString, label) => {
  const dateContainer = document.createElement("span")
  dateContainer.appendChild(document.createTextNode(label))
  const date = document.createElement("date")
  date.appendChild(document.createTextNode(dateString))
  date.setAttribute("dateTime", dateString)

  dateContainer.appendChild(date)
  return dateContainer
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

  const timestampContainer = document.createElement("p")
  timestampContainer.classList.add("timestamp")

  if (!title) return

  const timestampNode = createDateNodeInDocument(document)
  const createdAtElement = timestampNode(formatDate(createdAt), "Published: ")
  timestampContainer.appendChild(createdAtElement)

  if (modifiedAt) {
    timestampContainer.appendChild(document.createTextNode("( "))
    const modifiedAtElement = timestampNode(formatDate(modifiedAt), "Updated: ")
    timestampContainer.appendChild(modifiedAtElement)
    timestampContainer.appendChild(document.createTextNode(" )"))
  }
  title.insertAdjacentElement("afterend", timestampContainer)
  return document
}

module.exports = { createTimestampsManager }
