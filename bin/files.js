#!/usr/bin/env node

const os = require("os")
const { exec } = require("child_process")

const [GIT_MODIFIED_SYMBOL, GIT_DELETED_SYMBOL, GIT_ADDED_SYMBOL] = [
  "M\t",
  "A\t",
  "D\t",
]

const isDeleted = changeString => changeString.startsWith("D\t")
const removeChangeIndicators = changeString => changeString.slice(2)

exec("git show --name-status", (error, stdout) => {
  const changes = stdout
    .split(os.EOL)
    .filter(Boolean)
    .slice(4)
  const modifiedFiles = changes
    .filter(change => change.startsWith(GIT_MODIFIED_SYMBOL))
    .map(removeChangeIndicators)
  const newFiles = changes
    .filter(change => change.startsWith(GIT_ADDED_SYMBOL))
    .map(removeChangeIndicators)
  const deletedFiles = changes
    .filter(change => change.startsWith(GIT_DELETED_SYMBOL))
    .map(removeChangeIndicators)
  console.log({ modifiedFiles, newFiles, deletedFiles })
})
