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


// const update = async (req, res) => {
//     const course = await Curso.findOne({where:{id:req.params.id}});
//     res.render("curso/update", {
//         course: course.toJSON()
//     })
//  }


const update = async (req, res) => {
    if(req.route.methods.get) {
      const { id } = req.params;
      const curso = await Curso.findOne({ where: {id}});
      res.render('curso/update', curso.toJSON());
    } else {
      const { id } = req.params
      const { body } = req;
      await Curso.update(body, {where: {id}});
      res.redirect('/curso/read/' + id);
    }
  }

  

  const remove = async (req, res) => {
    if (req.route.methods.delete) {
      try {
        const curso = await Curso.findOne({ where: { id: req.params.id } });
        await curso.destroy();
        res.redirect("/curso");
      } catch (err) {
        throw new Error(err);
      }
    } else {
      const course = await Curso.findOne({ where: { id: req.params.id } });
      res.render("curso/remove", {
        course: course.toJSON(),
      });
    }
  };
  


module.exports = {index, create, read, update, remove}