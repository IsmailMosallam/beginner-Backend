const auther = function(req, res, next) {
    const { user } = req.query;
    if (user === 'ismail') {
        console.log("authorize")
        next();


    } else {
        res.states(401).send("Unauthorize")

        next();
    }
}
module.exports = auther;