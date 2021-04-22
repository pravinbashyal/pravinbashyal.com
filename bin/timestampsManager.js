const generateId = () => {
  return Math.random()
    .toString(36)
    .substr(2, 9)
}
// TODO: add dl
const createDateNodeInDocument = document => (dateString, label) => {
  const dateContainer = document.createElement("span")
  const labelId = generateId()
  const valueId = generateId()

  dateContainer.setAttribute("aria-labelledby", labelId)
  dateContainer.setAttribute("aria-describedby", valueId)

  const labelEl = document.createElement("span")
  labelEl.appendChild(document.createTextNode(label))
  labelEl.setAttribute("id", labelId)
  dateContainer.appendChild(labelEl)

  const date = document.createElement("date")
  date.setAttribute("id", valueId)
  date.setAttribute("dateTime", dateString)
  date.appendChild(document.createTextNode(dateString))

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

  const timestampContainer = document.createElement("p")
  timestampContainer.classList.add("timestamp")

  if (!title) return

  const timestampNode = createDateNodeInDocument(document)
  const createdAtElement = timestampNode(formatDate(createdAt), "Published: ")
  timestampContainer.appendChild(createdAtElement)

  if (modifiedAt) {
    const bracesOpen = document.createElement("span")

    bracesOpen.appendChild(document.createTextNode("( "))
    bracesOpen.setAttribute("aria-hidden", "true")
    timestampContainer.appendChild(bracesOpen)
    const modifiedAtElement = timestampNode(formatDate(modifiedAt), "Updated: ")
    timestampContainer.appendChild(modifiedAtElement)
    const bracesClose = document.createElement("span")
    bracesClose.appendChild(document.createTextNode(" )"))
    bracesClose.setAttribute("aria-hidden", "true")
    timestampContainer.appendChild(bracesClose)
  }
  title.insertAdjacentElement("afterend", timestampContainer)
  return document
}

module.exports = { createTimestampsManager }
