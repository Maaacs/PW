const fs = require("fs")

const readFile = (filename) =>{
    return new Promise ((resolve, reject) =>{
        fs.readFile(filename, "utf-8", (err, conteudo) =>{
            if (err) reject(err);
            else resolve(parseInt(conteudo))
        })
    });
}

async function soma(){
    const d1 = await readFile("./1.txt")
    const d2 = await readFile("./2.txt")
    const d3 = await readFile("./3.txt")
    return d1+d2+d3
}

console.log('a')
soma().then((data) => console.log(data))
console.log('b')
console.log('c')


