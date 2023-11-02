const express = require("express"); // importa a biblioteca com seus métodos
const logger = require("./middlewares/logger");
const router = require("./router/router");
const handlebars = require('express-handlebars');
const sass = require('node-sass-middleware');

const app = express()
const morgan = require("morgan")
require('dotenv').config()



const PORT = process.env.PORT ?? 3456
//const PORT = 3456 // ou uso direto
app.use(morgan("combined"))

app.engine("handlebars", handlebars.engine(  {
    //helpers: require(`${__dirname}/../src/views/helpers/helpers`),
    layoutsDir: `${__dirname}/../src/views/layouts`,
    defaultLayout: 'main',
}));

app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);


app.use(sass({
    src: `${__dirname}/../public/scss`,
    dest: `${__dirname}/../public/css`,
    outputStyle: "compressed",
    prefix: "/css",
}));

app.use(logger("complete"))
app.use(express.urlencoded({ extended: false}))
app.use("/img", express.static(`${__dirname}/../public/img`))
app.use("/css", express.static(`${__dirname}/../public/css`))
app.use("/webfonts", express.static(`${__dirname}/../node_modules/@fortawesome/fontawesome-free/webfonts`))
app.use('/js', [
    express.static(`${__dirname}/../public/js`),
    express.static(`${__dirname}/../node_modules/bootstrap/dist/js/`)
]);
app.use(router)

// app.listen(3456) // exemplo direto
app.listen(PORT) // Com boas praticas