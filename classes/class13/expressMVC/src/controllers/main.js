const index = (req, res) => {
    const profs = [
        {nome: "Davi Fernandes", sala: 1238},
    ]
    res.render("main/index", {
        showNome: true,
        //titulo: "Nome",
        conteudo: "Maria Eduarda",
        layout: false
    })
}

const sobre = (req, res) => {
    //const conteudo = 'Página sobre a aplicação';
    res.render('main/sobre', {
        titulo: "Jogo de Xadrez",
        conteudo: "Este jogo é...",
        layout: false
    })
}

module.exports = {index, sobre}
