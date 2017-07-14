var connection = require('./connection');
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {

selectAll: function(tableName, cb) {

    var queryString ="SELECT * FROM burgers";

    connection.query(queryString, tableName, function(err, result) {
        if (err) throw err
        console.log(result);
        cb(result);
        });
    },

updateOne: function(table, objColVals, condition, cb) {

   var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

        cb(result);
        });
    },
insertOne: function(tableName, columnName1, columnName2, value1, value2, cb) {

    var queryString ="INSERT INTO ?? (??, ??) VALUES (?, ?); ";

    connection.query(queryString, [tableName, columnName1, columnName2, value1, value2], function(err, result) {
        if (err) throw err
        console.log(result);
        cb(result);
        });
    }
}
module.exports = orm;