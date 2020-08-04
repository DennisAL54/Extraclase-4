const express = require("express")

const path = require("path");

const exphbs = require("express-handlebars");

const StudentController = require("./Controllers/StudentController")

const app = express();

app.set("views", path.join(__dirname, "/views/"));
app.engine("hbs", exphbs({ extname: "hbs", defaultLayout: "mainLayout", layoutsDir: __dirname + "/views/layouts/" }));
app.set("view engine", "hbs");

require("./src/DB");

app.listen(3000);

console.log("Server corriendo");

app.use("/Student", StudentController);