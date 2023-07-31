const express = require("express");
const app = express()

app.get("/", (req, res) => {
    req.setEncoding("Hello world");
})

app.listen(8000);