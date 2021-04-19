#!/usr/bin/env node

const os = require("os")
const { exec } = require("child_process")

const [GIT_MODIFIED_SYMBOL, GIT_DELETED_SYMBOL, GIT_ADDED_SYMBOL] = [
  "M\t",
  "D\t",
  "A\t",
]

const removeChangeIndicators = changeString => changeString.slice(2)
const isMarkDown = filename => filename.endsWith(".md")

let files = {
  modifiedFiles: [],
  newFiles: [],
  deletedFiles: [],
}

const changes = {}

const listFiles = exec("git show --name-status", (error, stdout) => {
  const changes = stdout
    .split(os.EOL)
    .filter(Boolean)
    .slice(4)
  const modifiedFiles = changes
    .filter(change => change.startsWith(GIT_MODIFIED_SYMBOL))
    .filter(isMarkDown)
    .map(removeChangeIndicators)
  const newFiles = changes
    .filter(change => change.startsWith(GIT_ADDED_SYMBOL))
    .filter(isMarkDown)
    .map(removeChangeIndicators)
  const deletedFiles = changes
    .filter(change => change.startsWith(GIT_DELETED_SYMBOL))
    .filter(isMarkDown)
    .map(removeChangeIndicators)
  files = {
    modifiedFiles,
    newFiles,
    deletedFiles,
  }
})

const notEmptyString = string => string !== ""

const commandCallback = timestampType => (error, stdout) => {
  const outputLines = stdout.split(os.EOL)
  if (outputLines.filter(notEmptyString).length === 0) return
  const date = outputLines[2]
  console.log({ outputLines })
  const dateSplit = date.split(" ")
  const index = dateSplit.slice(1).findIndex(notEmptyString)
  changes[timestampType] = dateSplit
    .slice(index)
    .filter(notEmptyString)
    .join(" ")
}

const getTimestamps = (filename, cb) => {
  const runCommand = ({ command, timestampType }) => {
    console.log("command ran", command)
    return exec(command, commandCallback(timestampType))
  }

  const createdCommand = runCommand({
    command: `git log --diff-filter=A -- ${filename}`,
    timestampType: "createdAt",
  })
  createdCommand.on("close", _ => {
    const modifiedCommand = runCommand({
      command: `git log --diff-filter=M -- ${filename}`,
      timestampType: "modifiedAt",
    })

    modifiedCommand.on("close", _ => {
      cb(changes)
    })
  })
}

const blogRegex = new RegExp(".*blogs/[a-zA-Z_.-]+.md$")
const isBlogPath = path => {
  return blogRegex.test(path)
}

module.exports = { getTimestamps, isBlogPath }

// listFiles.on("close", _ => {
//   console.log("exited", { files })
//   const { modifiedFiles, newFiles } = files
//   modifiedFiles.concat(newFiles).map(inputFilePath => {
//     readFile(inputFilePath, "utf-8", (_, mdString) => {
//       const htmlPage = createHtmlPage(mdString)
//       writeFile(outputFilePath, htmlPage, () => {})
//     })
//   })
// })
