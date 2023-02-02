const path = require('path')
const sep = path.sep
console.log(sep)
    // ===========================================================
const joinFolder = path.join('content', 'sup-folder', 'text.txt')
console.log(joinFolder)
    // =========================================

const absolute = path.resolve('content', 'sup-folder', 'text.txt')
console.log(absolute)