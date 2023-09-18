const fs = require("fs")

const readFile = (filename) =>{
    return new Promise ((resolve, reject) =>{
        fs.readFile(filename, "utf-8", (err, conteudo) =>{
            if (err) reject(err);
            else resolve(parseInt(conteudo))
        })
    });
}


const p1 = readFile("./1.txt")
const p2 = readFile("./2.txt")
const p3 = readFile("./3.txt")

Promise.all([p1, p2, p3]).then(([d1,d2,d3]) =>{
    console.log(d1+d2+d3)
})
