var path = require("path");
var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index");
    });
};

module.exports = function(app) {
    app.post("/", function(req, res) {
        res.render("index");
    });
};