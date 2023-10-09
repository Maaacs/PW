const express = require ("express")
const router = express.Router()
const mainController = require ('../controllers/main')


router.get("/", mainController.index);
router.get("/sobre", mainController.sobre);
router.get("/imagem", mainController.imagem);


module.exports = router