
const express = require("express")

const Router = express.Router()

const diario = require("../diario/diario")


Router.get("/dias",(req,res)=>{
    res.json(JSON.stringify(diario.todosDias()))
})

Router.post("/escrever", express.json(),(req,res)=>{
        let data = req.body.data;
        let titulo = req.body.titulo;
        let texto = req.body.texto;
        let ensinamento = req.body.ensinamento;

        diario.NovoDia(data,titulo,texto,ensinamento)
        res.send("Diário atualizado !!!")

})

module.exports = Router;