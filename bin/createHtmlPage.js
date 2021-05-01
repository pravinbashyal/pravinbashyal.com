#!/usr/bin/env node

const {
  documentFromHtmlString,
  withDoctype,
  addHeaderLinks,
} = require("./htmlOperations")
const createRenderer = require("./renderer")
const { getTitle, setTitle } = require("./title")
const { createTimestampsManager } = require("./timestampsManager")
const { getTimestamps, isBlogPath, toGithubEditPath } = require("./files")
const { addEditLinkToFooter } = require("./editLink")
const parseName = require("./parseName")

const [inputFilePath, outputPath] = process.argv.slice(2)
const outputFilePath = `${outputPath}/${parseName(inputFilePath)}.html`
console.log({ inputFilePath, outputFilePath })

const marked = require("marked")
marked.use({ renderer: createRenderer(setTitle) })
const { readFile, writeFile } = require("fs")

const createHtmlDocument = mdString => {
  const htmlFromMd = marked(mdString)
  const document = documentFromHtmlString({
    content: htmlFromMd,
    title: getTitle(),
  })
  return document
}

const fileCallBack = ({ createdAt, modifiedAt, githubEditPath } = {}) => {
  readFile(inputFilePath, "utf-8", (_, mdString) => {
    const pageDocument = createHtmlDocument(mdString)
    if (createdAt && modifiedAt) {
      const addTimestamps = createTimestampsManager({ createdAt, modifiedAt })
      addTimestamps(pageDocument)
    }
    if (githubEditPath) {
      addEditLinkToFooter(pageDocument, githubEditPath)
    }
    addHeaderLinks(pageDocument)
    writeFile(
      outputFilePath,
      withDoctype(pageDocument.documentElement.outerHTML, "html"),
      () => {}
    )
    console.log("created: ", outputFilePath)
  })
}

if (isBlogPath(inputFilePath)) {
  getTimestamps(inputFilePath, dates =>
    fileCallBack({ ...dates, githubEditPath: toGithubEditPath(inputFilePath) })
  )
} else {
  fileCallBack()
}
