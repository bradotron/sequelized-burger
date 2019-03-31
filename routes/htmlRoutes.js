// Dependencies
// =============================================================
var express = require("express");
var router = express.Router();
var db = require("../models/index.js"); 
// =============================================================


// index
router.get("/", function(req, res) {
  db.Burger.findAll().then(function(results) {
    //console.log(results);
    res.render('index', { title: 'Burger Town', burgers: results});
  });
});

module.exports = router;
