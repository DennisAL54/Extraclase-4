const express = require("express")

const app = express();

require("./DB");

app.listen(3000);

console.log("Server corriendo");