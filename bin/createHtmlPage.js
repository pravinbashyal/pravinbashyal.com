#!/usr/bin/env node

const { documentFromHtmlString } = require("./htmlOperations")
const createRenderer = require("./renderer")
const { getTitle, setTitle } = require("./title")
const { createTimestampsManager } = require("./timestampsManager")
const { getTimestamps } = require("./files")
const parseName = require("./parseName")

const [inputFilePath, outputPath] = process.argv.slice(2)
const outputFilePath = `${outputPath}/${parseName(inputFilePath)}.html`
console.log({ inputFilePath, outputFilePath })

const marked = require("marked")
marked.use({ renderer: createRenderer(setTitle) })
const { readFile, writeFile, statSync } = require("fs")

const createHtmlDocument = mdString => {
  const htmlFromMd = marked(mdString)
  const document = documentFromHtmlString({
    content: htmlFromMd,
    title: getTitle(),
  })
  return document
}

getTimestamps(inputFilePath, ({ createdAt, modifiedAt }) => {
  readFile(inputFilePath, "utf-8", (_, mdString) => {
    const pageDocument = createHtmlDocument(mdString)
    const addTimestamps = createTimestampsManager({ createdAt, modifiedAt })
    addTimestamps(pageDocument)
    writeFile(outputFilePath, pageDocument.documentElement.outerHTML, () => {})
    console.log("created: ", outputFilePath)
  })
})
