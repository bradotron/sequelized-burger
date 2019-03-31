var orm = require(`../config/orm.js`);

var burger = {
  all: function() {
    return new Promise(function(resolve, reject) {
      orm.selectAll(`burgers`).then(function(result) {
        resolve(result);
      });
    });
  },

  insertOne: function(cols, vals) {
    return new Promise(function(resolve, reject) {
      orm.insertOne(`burgers`, cols, vals).then(function(result) {
        resolve(result);
      });
    });
  },

  updateOne: function(objColsVals, condition) {
    return new Promise(function(resolve, reject) {
      orm.updateOne(`burgers`, objColsVals, condition).then(function(result) {
        resolve(result);
      });
    });
  },
};

module.exports = burger;
