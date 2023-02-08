const os = require('os')// because it is a built-in module, we dont need to import it. Note that we dont write ./

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the sytem uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currenOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalMem(),
    freeMem: os.freeMem(),
}

console.log(currenOS)