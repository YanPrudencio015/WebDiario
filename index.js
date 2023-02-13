const express = require("express")
const app = express()
const PORT = 3000;
const rotas = require("./rotas/rotas")
const path = require("path")

app.use("/diario",rotas)

app.use("/",express.static(path.join(__dirname,"public")))


app.listen(PORT,()=>{
    console.log(`Server Running...`)
})