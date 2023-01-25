const TodoModel = require("../models/todo");

exports.getAll = async () => {
    return await TodoModel.find();
}

exports.getById = async (id) => {
    return await TodoModel.findById(id);
}

exports.create = async (todo) => {
    return await TodoModel.create(todo);
}

exports.update = async (id, todo) => {
    return await TodoModel.findByIdAndUpdate(id, todo);
}

exports.delete = async (id) => {
    return await TodoModel.findByIdAndDelete(id);
}
 