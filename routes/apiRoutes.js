// Dependencies
// =============================================================
var db = require("../models/index.js"); // Routes
// =============================================================

var express = require("express");
var router = express.Router();


router.put(`/devour/:id`, function(req, res) {
  newData = {
    devoured: true,
  }
  whereData = { 
    id: req.params.id, 
  };

  db.Burger.update(newData, { where: whereData}).then( function() {
    res.sendStatus(200).end();
  });
});

router.post(`/addBurger`, function(req, res) {
  console.log(`adding ${req.body.name}`);

  db.Burger.create({
    burgerName: req.body.name
  }).then(function(dbBurger) {
    //console.log(dbBurger);
    res.sendStatus(200).end();
  });
});

module.exports = router;
