var express = require("express");
var router = express.Router();

var burger = require("../models/burgerMod.js");

router.get("/", function(req, res){
    burger.all(function(data) {
        var burger = {
            burger: data
        };
    res.render("index", burger);
    })
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.update({
    eat: req.body.eat
  }, condition, function() {
    res.redirect("/");
  });
});

router.post("/", function(req, res) {
    burger.insert(req.body.name,
    function(){
        res.redirect("/")
    });
});


module.exports = router;