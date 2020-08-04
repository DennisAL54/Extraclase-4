const express = require("express");
const mongoose = require("mongoose");

var router = express.Router();
const Student = require("../src/Student.model");

router.get("/", (req, res) => {
	res.render("../views/Student/AddOrUpdt", {
	viewTitle : "Inserte Estudiante"});
});

router.post("/", (req, res) => {
	insertRecord(req,res)
});

function insertRecord(req, res) {
	var student = new Student();
	student.name = req.body.name;
	student.save((err, doc) => {
		if (!err)
			res.redirect("Student/list");
		else {
			console.log("Error de insercion" + err);
		}
	});
}
router.post("/list", (req, res) => {
	res.json("desde lista");
});
module.exports = router;