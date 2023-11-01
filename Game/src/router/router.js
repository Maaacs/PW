const express = require ("express")
const router = express.Router()
const mainController = require ('../controllers/main')
const areaController = require ("../controllers/area")
const cursoController = require ("../controllers/curso")
const gameController = require ("../controllers/game")


router.get("/", mainController.index);
router.get("/sobre", mainController.sobre);
router.get("/imagem", mainController.imagem);
router.get("/areas", areaController.index);
router.get("/game", gameController.game);

//curso controller
router.get("/curso", cursoController.index);
router.get("/curso/create", cursoController.create);
router.post("/curso/create", cursoController.create);
router.get("/curso/update/:id", cursoController.update);
router.post("/curso/update/:id", cursoController.update);
router.post("/curso/remove/:id", cursoController.remove);
router.get("/curso/read/:id", cursoController.read);

module.exports = router