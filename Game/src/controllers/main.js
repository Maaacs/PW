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

const ui = (req, res) => {
    res.render("main/ui", {
        imagem: true,
        titulo: "Xadrez",
    })
}

module.exports = {index, sobre, ui}
