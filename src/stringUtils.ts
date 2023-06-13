function toFirstUppercase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function prettifyPath(str: string, pathType: '/' | '//' | '\\' | '\\\\') {
  return str
    .split(pathType)
    .join(' -> ')
}

export {
  toFirstUppercase,
  prettifyPath
}