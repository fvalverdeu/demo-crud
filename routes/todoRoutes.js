const express = require("express");
const { 
    getAllTodo,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
} = require("../controllers/todoController");

const router = express.Router();

router.route("/").get(getAllTodo);
router.route("/").post(createTodo);
router.route("/:id").get(getTodoById);
router.route("/:id").put(updateTodo);
router.route("/:id").delete(deleteTodo);

module.exports = router;