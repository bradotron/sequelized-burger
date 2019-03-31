// Dependencies
// =============================================================
var express = require("express");
var router = express.Router();
// =============================================================


// index
router.get("//", function(req, res) {
  res.render('index', { title: 'Burger Town' });
});

module.exports = router;
