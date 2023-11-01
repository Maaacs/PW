const models = require("../models/index");
const Curso = models.Curso;
const Op = models.Sequelize.Op;

const index = async (req, res) => { }

const create = async (req, res) => {
    if (req.route.methods.get){
        res.render("curso/create")
    }else{
        try{
            await Curso.create(req.body);
        }catch(err){
            throw new Error(error)
        }
    }
}


const read = async (req, res) => {
    const id = req.params.id;
    const curso = await Curso.findOnde({ where: {id}});
    res.render("curso/read", {
        curso: curso.toJson()
    })
}


const update = async (req, res) => { }
const remove = async (req, res) => { }

module.exports = {index, create, read, update, remove}