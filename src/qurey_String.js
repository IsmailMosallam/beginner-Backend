const express = require('express')
const { data } = require('./my-data')

const app = express();

app.get('/api/qurey', (req, res) => {

    const { search, limit } = req.query;
    let sortproduct = [...data]
    if (search) {
        sortproduct = sortproduct.filter((ele) => {
            ele.name.startsWith(search)
        })
    }
    if (limit) {
        sortproduct = sortproduct.slice(0, Number(limit))
        return res.json(sortproduct)
    }
    res.status(200).json(sortproduct)
})


app.listen(3000, () => {
    console.log("welcome to Server 30000 .....")
})