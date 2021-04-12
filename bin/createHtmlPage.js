#!/usr/bin/env node

const [inputFilePath, outputFilePath] = process.argv.slice(2)
console.log({ inputFilePath, outputFilePath })

const addHeader = require("./addHeader")

const marked = require("marked")
const { readFile, writeFile } = require("fs")

const createHtmlPage = mdString => {
  const htmlFromMd = marked(mdString)
  return addHeader(htmlFromMd)
}

readFile(inputFilePath, "utf-8", (_, mdString) => {
  const htmlPage = createHtmlPage(mdString)
  console.log({ outputFilePath, htmlPage })
  writeFile(outputFilePath, htmlPage, console.log)
})
