const path = require('path')
const sep = path.sep
console.log(sep)
    // ===========================================================
const joinFolder = path.join(__dirname, 'content', 'sup-folder', 'text.txt')
console.log(joinFolder)
    // =========================================
const Basename = path.basename(joinFolder, )
console.log(Basename)
    // =============================c
const absolute = path.resolve(__dirname, 'content', 'sup-folder', 'text.txt')
console.log(absolute)