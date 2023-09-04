const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: String,
    genre: String,
    authorId: String
});

module.export = mongoose.model("Book", bookSchema);