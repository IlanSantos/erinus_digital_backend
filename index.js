const express = require("express")

const app = express()

const PORT = 8080
app.listen(8080, () => {
    console.log("Servidor iniciado na porta " + PORT)
})