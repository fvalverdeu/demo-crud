const todoService = require("../services/todoService");

exports.getAllTodo = async (req, res) => {
    try {
        const todoList = await todoService.getAll();
        res.json({
            data: todoList,
            status: "SUCCESS"
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

exports.getTodoById = async (req, res) => {
    try {
        const todo = await todoService.getById(req.params.id);
        res.json({
            data: todo,
            status: "SUCCESS"
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

exports.createTodo = async (req, res) => {
    try {
        const todo = await todoService.create(req.body);
        res.json({
            data: todo,
            status: "SUCCESS"
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

exports.updateTodo = async (req, res) => {
    try {
        const todo = await todoService.update(req.params.id, req.body);
        res.json({
            data: todo,
            status: "SUCCESS"
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        const todo = await todoService.delete(req.params.id);
        res.json({
            data: todo,
            status: "SUCCESS"
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}
