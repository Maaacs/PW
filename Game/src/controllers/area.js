const models = require("../models/index") // da acesso a todos os modelos da aplicação
const Area = models.Area;


async function index(req, res) {
    const areas = await Area.findAll();
    console.log(areas.map(area => area.toJSON()))
    res.render("area/index", {
        areas: areas.map(area => area.toJSON())
    })
}

module.exports = {index};