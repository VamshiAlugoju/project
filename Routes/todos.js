"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
let id_for_todo = 1;
router.get("/", (req, res) => {
    console.log(req);
    res.json({ todos: todos });
});
router.post("/", (req, res) => {
    const newtodo = {
        id: id_for_todo,
        text: req.body.text
    };
    id_for_todo++;
    todos.push(newtodo);
    res.json(todos);
});
router.delete("/:id", (req, res) => {
    let id = parseInt(req.params.id);
    todos = todos.filter(todo => {
        return todo.id !== id;
    });
    res.json(todos);
});
router.put("/:id", (req, res) => {
    let id = parseInt(req.body.id);
    let text = req.body.text;
    todos = todos.map(todo => {
        if (todo.id === id) {
            todo.text = text;
        }
        return todo;
    });
    res.json(todos);
});
exports.default = router;
//# sourceMappingURL=todos.js.map