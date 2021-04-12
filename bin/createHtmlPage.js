#!/usr/bin/env node

const file = process.argv[2]

const addHeader = require("./addHeader")

const marked = require("marked")
const { readFile } = require("fs")

const createHtmlPage = mdString => {
  const htmlFromMd = marked(mdString)
  addHeader(htmlFromMd)
}

readFile(file, "utf-8", (_, mdString) => {
  const htmlPage = createHtmlPage(mdString)
})
