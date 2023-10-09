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
    res.render("sobre", {
        about: true,
        titulo: "O jogo de Xadrez",
        conteudo: "O xadrez é um jogo  de tabuleiro",
        layout: false
    })

})

router.get("/imagem", (req, res) => {
    res.render("imagem", {
        imagem: true,
        titulo: "Xadrez",
        layout: false
    })

})


module.exports = router