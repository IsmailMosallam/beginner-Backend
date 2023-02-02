const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'view')))

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'content', 'sup-folder', 'index.html'))
})

const bort = 3000;
app.listen(bort, () => {
    console.log(`Welcome in server bort${bort}`)
})