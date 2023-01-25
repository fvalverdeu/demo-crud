const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    id: String,
    description: String
});

module.exports = mongoose.model("Todo", todoSchema);