
const Carros = require("../models/car");

// ();

const carController = {
    
    create: async (req,res) => {
        try {

            const {marca, modelo, ano, cor, quilometragem, restaurado, ativo} = req.body;

            const novoCarro = await Carros.create({marca, modelo, ano, cor, quilometragem, restaurado, ativo});

            res.status(201).json({
                message: "Carro adicionado!",
                data: novoCarro
            })

        } catch(error) {

            res.status(500).json({
                message: "Erro ao adicionar carro",
                error: error.message
            });

        }
    },
    getAll: async (req,res) => {
        try {

            const todosCarros = await Carros.findAll({
                attributes: ["id","marca", "modelo", "ano", "cor", "quilometragem", "restaurado", "ativo"]
            });

            res.status(200).json({
                message: "Garagem: ",
                data: todosCarros
            });

        } catch(error) {

            res.status(500).json({
                message: "Erro ao buscar carros",
                error: error.message
            });

        }
    },
    getOne: async (req,res) => {
        try {

            const carroID = req.params.id;
            const buscarCarro = await Carros.findByPk(carroID);

            res.status(200).json({
                message: `Carro ID: $${carroID} encontrado!`,
                data: buscarCarro
            });

        } catch(error) {

            res.status(500).json({
                message: "Erro ao buscar carro",
                error: error.message
            });

        }
    }

}

module.exports = carController;
