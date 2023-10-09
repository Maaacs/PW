const express = require("express") // importa a biblioteca com seus métodos
const logger = require("./middlewares/logger")
const router = require("./router/router")

const app = express()
const morgan = require("morgan")
require('dotenv').config()



const PORT = process.env.PORT ?? 3456
//const PORT = 3456 // ou uso direto
app.use(morgan("combined"))


app.use(logger("complete"))
app.use("/img", express.static(`${__dirname}/../public/img`))
app.use(router)

// app.listen(3456) // exemplo direto
app.listen(PORT) // Com boas praticas