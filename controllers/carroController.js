// ligação controller - model 
const Carro = require("../models/Carro")

module.exports = class CarroController {

    // home
    static home(req, res) {
        res.render("home")
    }

    // sobre
    static sobre(req, res) {
        res.render("sobre")
    }

    // contato
    static contato(req, res) {
        res.render("contato")
    }
 
    // add carro GET
    static adicionar(req, res) {
        res.render("adicionar")
    }

    // salvar carro POST
    static async salvar(req, res) {
        const {marca, modelo, ano, preco, imagemURL} = req.body

        await Carro.create({marca, modelo, ano, preco, imagemURL})

        console.log("Carro adicionado!")
        res.redirect("/carros")
    }

    // mostrar carros
    static async mostrarCarros(req, res) {
        const carros = await Carro.findAll({ raw: true })

        res.render("carros", { carros })
    }

    // detalhe do carro - (filter ID)
    static async carroDetalhe(req, res) {
        const id = req.params.id

        const carro = await Carro.findOne({
            where: {id},
            raw: true
        })
        // caso o ID não exista
        if(!carro) {
            return res.redirect("/carros")
        }

        res.render("carro-detalhe", { carro })
    }

    // editar GET
    static async editar(req, res) {
        const id = req.params.id

        const carro = await Carro.findOne({
            where: {id},
            raw:true
        })

        if(!carro) {
            return res.redirect("/carros")
        }

        res.render("editar-carro", { carro })
    }
    // editar post
    static async saveEdit(req, res) {
        const {id, marca, modelo, ano, preco, imagemURL} = req.body

        const novoCarro = await Carro.update(
            {marca, modelo, ano, preco, imagemURL},
            {where: {id} }
        )

        console.log("Carro atualizado!")
        res.redirect("/carros")
    }

    // remover

    static async remover(req, res) {
        const id = req.body.id

        await Carro.destroy({ where: {id} })

        console.log("Carro removido!")
        res.redirect("/carros")
    }
}