const http = require('node:http') // protocolo HTTP

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
    console.log('request received: ', req.url)
    res.end('Rick')
}


const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`)
})