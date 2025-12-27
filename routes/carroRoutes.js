const express = require("express")
const router = express.Router()

const CarroController = require("../controllers/carroController")

// rotas
router.get("/", CarroController.home)

router.get("/carros/add", CarroController.adicionar)

router.post("/carros/add", CarroController.salvar)

router.get("/carros", CarroController.mostrarCarros)

router.get("/carros/:id", CarroController.carroDetalhe)

router.get("/sobre", CarroController.sobre)

router.get("/contato", CarroController.contato)

router.post("/carros/remove", CarroController.remover)

router.get("/carros/edit/:id", CarroController.editar)

router.post("/carros/update", CarroController.saveEdit)

// para treino agr



// export router
module.exports = router