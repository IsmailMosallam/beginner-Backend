const express = require('express')
const app = express();

// req => middle ware => res
const logger = function(req, res, next) {
    const method = req.method
    const url = req.url
    const date = new Date().getHours()
    console.log(method, url, date)
        // res.send("any thinge")
    next();
}

app.get('/', logger, (req, res) => {
    res.send("Home")
})

app.get('/about', logger, (req, res) => {
    res.send("about")
})



app.listen(3000, () => {
        console.log("welcome to Server 30000 .....")
    })
    // const express = require('express')
    // const logger = require('./logger')
    // const auther = require('./authorization')
    // const app = express();

// // req => middle ware => res
// app.use([auther, logger])

// app.get('/', (req, res) => {

//     res.send("Home")
// })
// app.get('/api/requst', (req, res) => {
//     res.send("api requst")
// })
// app.get('/api/responde', (req, res) => {
//     res.send("api respond")
// })

// app.get('/about', (req, res) => {
//     res.send("about")

// })


// app.listen(3000, () => {
//     console.log("welcome to Server 30000 .....")
// })