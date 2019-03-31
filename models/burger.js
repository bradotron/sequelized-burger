// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Burger" model that matches up with DB
var Burger = sequelize.define("burger", {
  burgerName: { type: Sequelize.STRING, allowNull: false },
  devoured: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
});

// Syncs with DB
Burger.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burger;