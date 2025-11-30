const express = require("express");
const router = express.Router();
const carController = require("../controller/car-controller");

router.post("/add", carController.create);

router.get("/todos", carController.getAll);


router.get("/:id", carController.getOne);






module.exports = router;

