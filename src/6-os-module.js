const os = require('os')
const user = {
    name: os.userInfo(),
    UpTime: os.uptime(),
    type: os.type(),
    release: os.release()
}
console.log(user)