/*jslint node: true */
/* global define */
"use strict";

global.define = require("requirejs");
global._ = require("underscore");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const functions = require("firebase-functions");
const hbs = require("express-handlebars");
var templates = "/shopmax";
var home = require("./home1");

app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    partialsDir: path.join(__dirname, templates, "/partials"),
    defaultLayout: "layout",
    layoutsDir: path.join(__dirname, templates, "/layouts")
  })
);
app.set("views", path.join(__dirname, templates));
app.set("view engine", "hbs");

app.use(express.static("shopmax"));

app.get("/", home.renderHomePage);

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});

exports.app = functions.https.onRequest(app);

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(404).send("Something broke!");
});
