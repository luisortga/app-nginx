// begin of project in node

const { parentPort } = require('worker_threads')

parentPort.on('message', n => {

    let total = 0

    for (let i = 0; i < n; i++) {
        total += i
    }

    parentPort.postMessage(total)

})

// 288 106 0533