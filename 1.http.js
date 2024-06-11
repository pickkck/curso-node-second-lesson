const http = require('node:http')

const desirePort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request recived')
  res.end('Hola Mundo')
})

server.listen(desirePort, () => {
  console.log(`server listening on port http://localhost:${desirePort}`)
})
