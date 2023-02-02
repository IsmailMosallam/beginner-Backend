const express = require('express')
const path = require('path')
let {
    data
} = require('./my-data')
const app = express();
app.use(express.static('./content/sup-folder'))
app.use(express.urlencoded())


app.get('/api/get', (req, res) => {
    res.sendFile(path.join(__dirname, 'content', 'sup-folder', 'index2.html'))
    console.log(data)
})
app.post('/add-lan', (req, res) => {

    const { langname } = req.body;
    if (langname) {
        return res.status(200).send(`My name lang ${langname}`)
    }
    res.send("cann't access name lang ")
    console.log(req.body)

})


app.listen(3000, () => {
    console.log("welcome to Server 30000 .....")
})