var orm = require("../config/orm.js");

var burger = {
    all: function(call) {
        orm.selectAll("burgers", function(res) {
            call(res);
        });
    },
    insert: function(value1, call) {
        //console.log("value1: ", value1);
        orm.insertOne("burgers", "name", "eat", value1, false, function(req, res) {
            call(res);
        });
    },
    update: function(objColVals, condition, call) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      call(res);
    });
    }
};
module.exports = burger;