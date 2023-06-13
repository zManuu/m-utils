function toFirstUppercase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function prettifyPath(str, pathType) {
    return str
        .split(pathType)
        .join(' -> ');
}
export { toFirstUppercase, prettifyPath };
