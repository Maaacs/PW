//const isPrime = require("is-prime-number");
const http = require("http");

const { default: isPrime } = require("just-is-prime");


let counter = 0;

const server = http.createServer((req, res) =>{
    console.log(counter++)
    let number = 0;
    let qtdPrimos = 0;
    while (qtdPrimos < 2_000_000){
        if(isPrime(number++)) qtdPrimos++;
    }
    res.end(`${number}`) //converte numero pra string
});

server.listen(3456);

/*const isPrime = require("is-prime-number");
const http = require("http");
let counter = 0;

http.createServer((req, res) => {
    console.log(`Counter #${++counter}`);
    let number = 0;
    let qtdPrimes = 0;
    while(qtdPrimes<1_000_000) {
        if (isPrime(++number)) qtdPrimes++;
    }
    res.end(`Primo ${number}`)
}).listen(3000);*/