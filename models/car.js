
const sequelize = require("sequelize");
const db = require("../db/conection");

const Carros = db.define("Garagem", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: sequelize.STRING,
        allowNull: true
    },
        modelo: {
        type: sequelize.STRING,
        allowNull: true
    },
        ano: {
        type: sequelize.INTEGER,
        allowNull: true
    },
        cor: {
        type: sequelize.STRING,
        allowNull: true
    },
        quilometragem: {
        type: sequelize.INTEGER,
        allowNull: true
    },
        restaurado: {
        type: sequelize.BOOLEAN,
        allowNull: true
    },
        ativo: {
        type: sequelize.BOOLEAN,
        allowNull: true
    },
});

module.exports = Carros;