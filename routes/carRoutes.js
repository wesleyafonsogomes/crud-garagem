const express = require("express");
const router = express.Router();
const carController = require("../controller/car-controller");

router.post("/add", carController.create);

router.get("/todos", carController.getAll);

router.get("/:id", carController.getOne);

router.put("/:id", carController.update);

router.delete("/:id", carController.delete);




module.exports = router;

