// workers, multi threads

const { parentPort } = require('worker_threads')

let total = 0

for (let i = 0; i < 10_000_000_000; i++) {
  total += i
}

parentPort.postMessage(total)

const { Worker } = require('worker_threads')

const worker = new Worker('./worker.js')

worker.on('message', (result) => {
  console.log(result)
})
