const express = require('express')
const { data } = require('./my-data')

const app = express()

app.get('/', (req, res) => {
    // res.json(data)
    res.send('<h1>Mu home</h1> <a href=" /my-data ">Linke</a>"')
})
app.get('/my-data/:ID', (req, res) => {
    console.log(req.params)
    const { ID } = req.params;
    const FindData = data.find((elem) => {
        return elem.age === Number(ID)
    })

    console.log(FindData)
    if (!FindData) {
        return res.status(404).send("Server not found")
    }
    return res.json(FindData);
})
app.get



app.listen(3000, () => {
    console.log("welcome srever 3000......")
})