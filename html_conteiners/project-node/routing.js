// start in code testing of routing
const http = require('node:http')

// commonJS -> modulos clásicos de node puedes importar
const dittoJSON = require('first-project/pokemon/ditto.json')

const processRequest = (req, res) => {
    const { method, url } = req

    switch (method) {
        case 'GET':
            switch (url) {
                case '/pokemon/ditto':
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end('<h1>My page</h1>')
                case '/about':  
                    //
            }
    }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
    console.log(`server listening on port http://localhost:1234`)
})