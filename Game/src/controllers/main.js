const index = (req, res) => {
    res.render("main/index", {
        showNome: true,
        nome: "Página inicial",
        titulo: "O jogo do TRex",
    })
}


const sobre = (req, res) => {
    res.render("main/sobre", {
        titulo: "O jogo do TRex",  
    })
}

const imagem = (req, res) => {
    res.render("main/imagem", {
        imagem: true,
        titulo: "Xadrez",
    })
}

module.exports = {index, sobre, imagem}
