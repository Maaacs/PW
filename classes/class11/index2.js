const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
    console.log("Este é o processo Master");
    for (let i = 0; i < numCPUs; i++) cluster.fork();
} else {
    http.createServer((req, res) => {
        res.end(`Eu sou um worker #${cluster.worker.id}`);
    }).listen(3344);
}