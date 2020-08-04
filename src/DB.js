const mongoose = require("mongoose")

mongoose.connect("mongodb://mongo/DataBase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("Db se conecto a", db.connection.host))
    .catch(err => console.error(err));