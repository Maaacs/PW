const express = require ("express")
const router = express.Router()


router.get("/", (req, res) => {
    const profs = [
        {nome: "Davi Fernandes", sala: 1238},
    ]
    res.render("index", {
        showNome: true,
        nome: "Maria Eduarda",
        layout: false
    })
})


router.get("/sobre", (req, res) => {
    res.render(index, {
        about: true,
        titulo: "O jogo de Xadrez",
        descricao: "O xadrez é um jogo  de tabuleiro..."
    })

})


module.exports = router