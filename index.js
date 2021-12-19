const express = require("express")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// MIDDLEWARES
app.get("/", (req, res) => {
    res.status(200).json({message: "OK"})
})



const PORT = 8080
app.listen(8080, () => {
    console.log("Servidor iniciado na porta " + PORT)
})