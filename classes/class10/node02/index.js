
// Criando um servidor web
const http = require ("node:http")

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html,charset=utf-8"}) // para reconhecer que é html passamos o charset
    response.write("oi");
    response.end();
})

server.listen(3456);