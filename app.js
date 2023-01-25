const express = require("express");
const app = express();

const mongoose = require("mongoose");

const todoRouter = require("./routes/todoRoutes");

mongoose.connect(
    "mongodb://localhost/CRUD",
    {

    },
    (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Connected");
        }
    }
)

app.use(express.json());

app.use("/api/todo", todoRouter);

app.listen(3000, () => {
    console.log("Server running in port 3000");
})