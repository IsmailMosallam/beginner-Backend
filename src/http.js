const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        res.end('<h1>Manara</h1>')
    }
    res.write("Hi manara")
    res.end()
})
server.listen(3000)