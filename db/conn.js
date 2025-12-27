// conexão com o banco 
const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("garagem3", "root", "99572196", {
    host: "localhost",
    dialect: "mysql"
})

try {
    sequelize.authenticate()
    console.log("Banco de dados conectado.")
} catch(err) {
    console.log(`Erro ao conectar ao banco de dados: ${err}`)
}

module.exports = sequelize