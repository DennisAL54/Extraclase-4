const mongoose = require("mongoose")

var studentSchema = new mongoose.Schema({
    name: {
        type String
    }
});

module.exports = mongoose.model("student", studentSchema);