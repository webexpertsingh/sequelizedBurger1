var db = require("../models");

module.exports = function(app){
    
    app.get("/", function(req, res) {
        
        db.Burger.findAll({}).then(function(dbBurger) {
            var retObj = {Burger: dbBurger};
            //console.log(retObj);
            res.render('index', retObj);
        });
    });

    app.post("/api/burgers", function(req, res){
         console.log("singh here 2");
        db.Burger.create({
            name: req.body.name,
            eat: false
        }).then(function(dbBurger) {
            console.log("test singh");
            res.redirect('/');
        });
    });

    app.put("/api/burgers/:id", function(req, res) {
        db.Burger.update({
            eat: true
        }, {where: {
            id: req.params.id
        }}).then(function(dbBurger){
            console.log("almost done");
            res.redirect('/');
        });
    });
};
