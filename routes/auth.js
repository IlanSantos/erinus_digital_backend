const express = require("express")
const Router = express.Router()
const {CreateUser} = require("../database/users")
const {HashEncryptGenerator} = require("../tools/crypt")

Router.post("/login", async () => {

})

Router.post("/signin", async (req, res) => {
    try{
        const {user} = req.body
        const encrypt_password = await HashEncryptGenerator(user.password)
        await CreateUser({password: encrypt_password, ...user})
        res.status(200).json({message: "Usuário criado!"})
    }catch(error){
        res.status(501).json({message: "Houve um erro! " + error})
    }
})

module.exports = Router