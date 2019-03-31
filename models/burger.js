// Burger model
// Creates a "Burger" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burgerName: { type: DataTypes.STRING, allowNull: false },
    devoured: { type: DataTypes.BOOLEAN, defaultValue: false }
  });
  return Burger;
};
