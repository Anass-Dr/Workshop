const express = require("express");

const app = express();

app.get("/", (_, res) => res.send("home page ma test ma wallo"));
app.get("/contact", (_, res) => res.send("contact page"));
app.get("/login", (_, res) => res.send("login page"));

module.exports = app;
