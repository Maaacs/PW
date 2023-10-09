const index = (req, res) => {
    const profs = [
        {nome: "Davi Fernandes", sala: 1238},
    ]
    res.render("index", {
        showNome: true,
        nome: "Maria Eduarda",
        layout: false
    })
}


const sobre = (req, res) => {
    res.render("sobre", {
        about: true,
        titulo: "O jogo de Xadrez",
        conteudo: "O xadrez é um jogo  de tabuleiro",
        layout: false
    })

}

const imagem = (req, res) => {
    res.render("imagem", {
        imagem: true,
        titulo: "Xadrez",
        layout: false
    })

}


module.exports = {index, sobre, imagem}
