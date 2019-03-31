// Import MySQL connection.
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  // selectAll()
  selectAll: function(tableInput) {
    return new Promise(function(resolve, reject) {
      let myQuery = `SELECT * FROM ${tableInput}`;
      connection.query(myQuery, function(err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }); // end of the query
    }); // end of the promise
  },

  insertOne: function(table, columns, values) {
    return new Promise(function(resolve, reject) {

      let myQuery = `INSERT INTO ${table} (${columns.toString()}) VALUES (${printQuestionMarks(values.length)})`;

      connection.query(myQuery, values, function(err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }); // end of the query
    }); // end of the promise
  },

  updateOne: function(table, objColVals, condition) {
    return new Promise(function(resolve, reject) {

      let myQuery = `UPDATE  ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
      connection.query(myQuery, function(err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }); // end of the query
    }); // end of the promise
  }
};

// Export the orm object for the model
module.exports = orm;
