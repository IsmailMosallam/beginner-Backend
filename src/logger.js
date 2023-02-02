const logger = function(req, res, next) {
    const method = req.method
    const url = req.url
    const date = new Date().getHours()
    console.log(method, url, date)
        // res.send("any thinge")
    next();
}
module.exports = logger