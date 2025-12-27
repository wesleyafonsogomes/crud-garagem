// dependências 
const express = require("express")
const app = express()

const { engine } = require("express-handlebars")

const conn = require("./db/conn")

const carroRoutes = require("./routes/carroRoutes")

const PORT = 3000

// req.body 
app.use(express.urlencoded({
    extended: true
}))

// json
app.use(express.json())

// handlebars
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

// css
app.use(express.static("public"))

// rota principal
app.use("/", carroRoutes)

// listen e sincronização do banco

conn.sync()
    .then(() => {
    app.listen(PORT)
    console.log("Online!")
})
    .catch(err => console.log(err))