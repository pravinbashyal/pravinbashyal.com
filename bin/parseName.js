#!/usr/bin/env node

const args = process.argv.slice(2)

const skipInitialDotPaths = path => {
  const splittedPath = path.split("/")
  if (splittedPath[0][0] === ".") {
    return splittedPath.slice(1).join("/")
  }
  return splittedPath.join("/")
}

const ignorePath = paths => path => paths.includes(path)

const skipInitialSrc = path => {
  const splittedPath = path.split("/")
  if (splittedPath[0] === "src") {
    return splittedPath.slice(1).join("/")
  }
  return splittedPath.join("/")
}

const removeTrailingMd = path => {
  const splittedPath = path.split(".")
  if (splittedPath[splittedPath.length - 1] === "md") {
    return splittedPath.slice(0, -1).join(".")
  }
  return splittedPath.join(".")
}

if (args[0] === "--path") {
  console.log(
    skipInitialSrc(skipInitialDotPaths(args[1]))
      .split("/")
      .slice(0, -1)
      .join("/")
  )
}

if (args[0] !== "--path") {
  console.log(skipInitialSrc(skipInitialDotPaths(removeTrailingMd(args[0]))))
}

module.exports = path =>
  skipInitialSrc(skipInitialDotPaths(removeTrailingMd(path)))
