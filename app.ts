// const express = require("express");
import express from "express"
import todos from "./Routes/todos"
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json())

app.use("/todo",todos);

app.listen(3000,()=>console.log("listening"))