
// Criando um servidor web
const http = require ("node:http")

const server = http.createServer((request, response) => {
    response.write("oi");
    response.end();
})

server.listen(3456);