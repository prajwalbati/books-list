const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

module.export = mongoose.model("Author", authorSchema);