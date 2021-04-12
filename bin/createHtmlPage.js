#!/usr/bin/env node

const { documentFromHtmlString } = require("./htmlOperations")
const createRenderer = require("./renderer")
const { getTitle, setTitle } = require("./title")

const [inputFilePath, outputFilePath] = process.argv.slice(2)
console.log({ inputFilePath, outputFilePath })

const marked = require("marked")
marked.use({ renderer: createRenderer(setTitle) })
const { readFile, writeFile } = require("fs")

const createHtmlPage = mdString => {
  const htmlFromMd = marked(mdString)
  const document = documentFromHtmlString({
    content: htmlFromMd,
    title: getTitle(),
  })
  return document.documentElement.outerHTML
}

readFile(inputFilePath, "utf-8", (_, mdString) => {
  const htmlPage = createHtmlPage(mdString)
  writeFile(outputFilePath, htmlPage, () => {})
})
