const express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
	res.render("../views/Student/AddOrUpdt", {
	viewTitle : "Inserte Estudiante"});
});

router.post("/", (req, res) => {
	console.log("Datos subidos")
});
module.exports = router;