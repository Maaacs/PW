const models = require("../models/index");
const Curso = models.Curso;
const Op = models.Sequelize.Op;

async function index(req, res) {
    const cursos = await Curso.findAll();
    console.log(cursos.map(area => area.toJSON()))
    res.render("curso/index", {
        cursos: cursos.map(area => area.toJSON())
    })
}


const create = async function (req, res) {
    console.log(req.route.methods.get)
    if (req.route.methods.get) {
        res.render('curso/create');
    } else {
        console.log("add curso")
        try{
            console.log(req.body)
            await Curso.create(req.body);
            res.redirect("/curso")
        } catch (err) {
            throw new Error(err)
        }
    }
}


const read = async (req, res) => {
    const id = req.params.id;
    const curso = await Curso.findOne({ where: {id}});
    res.render("curso/read", {
        curso: curso.toJSON()
    })
}


const update = async (req, res) => {
    const course = await Curso.findOne({where:{id:req.params.id}});
    res.render("curso/update", {
        course: course.toJSON()
    })
 }


const remove = async (req, res) => { }

module.exports = {index, create, read, update, remove}