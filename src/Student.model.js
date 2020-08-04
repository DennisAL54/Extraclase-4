const mongoose = require("mongoose")

var StudentSchema = new mongoose.Schema({
    name: {
        type String
    }
});

mongoose.model("Student", StudentSchema);