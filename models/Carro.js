// string, number, etc...
const { DataTypes } = require("sequelize")

// conexão com o banco
const db = require("../db/conn")

// model
const Carro = db.define("Carro", {
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    disponivel: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    imagemURL: {
        type: DataTypes.TEXT,
        allowNull: true
    },
})

module.exports = Carro;