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

exec("git show --name-status", (error, stdout) => {
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

  process.stdout.write([...modifiedFiles, ...newFiles].join(os.EOL))
})
