const express = require ("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hello World")
})

router.get("/sobre", (req, res) => {
    res.send("Sobre minha aplicação")
})


module.exports = router