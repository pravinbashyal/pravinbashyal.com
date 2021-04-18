#!/usr/bin/env node

const { documentFromHtmlString } = require("./htmlOperations")
const createRenderer = require("./renderer")
const { getTitle, setTitle } = require("./title")
const parseName = require("./parseName")

const [inputFilePath, outputPath] = process.argv.slice(2)
const outputFilePath = `${outputPath}/${parseName(inputFilePath)}.html`
console.log({ inputFilePath, outputFilePath })

const marked = require("marked")
marked.use({ renderer: createRenderer(setTitle) })
const { readFile, writeFile, statSync } = require("fs")

const { mtime: modifiedAt, birthTime: createdAt } = statSync(inputFilePath)

const addTimestamps = createTimestampsManager({ modifiedAt, createdAt })

const createHtmlDocument = mdString => {
  const htmlFromMd = marked(mdString)
  const document = documentFromHtmlString({
    content: htmlFromMd,
    title: getTitle(),
  })
  return document
}

readFile(inputFilePath, "utf-8", (_, mdString) => {
  const pageDocument = createHtmlDocument(mdString)
  addTimestamps(document)
  writeFile(outputFilePath, pageDocument.documentElement.outerHTML, () => {})
  console.log("created: ", outputFilePath)
})
