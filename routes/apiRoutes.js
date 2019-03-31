// Dependencies
// =============================================================
var Burger = require("../models/burger.js"); // Routes
// =============================================================

var express = require("express");
var router = express.Router();

// Get all books
router.get("/all", function(req, res) {
  console.log(`testing apiRouter`);
  res.send(`api routes testing`);
  // Burger.findAll({}).then(function(results) {
  //   res.json(results);
  // });
});
// router.get('/', function(req, res) {
//   burger.all().then(function(data) {
//     //console.log(data);
//     res.render('index', { title: 'Burger Town', burgers: data });
//   });
// });

// router.put(`/api/burgers/:id`, function(req, res) {
//   burger.updateOne({ devoured: 1 }, `id=${req.params.id}`).then(function(result) {
//     res.sendStatus(200).end();
//   });
// });

// router.post(`/api/burgers`, function(req, res) {
//   burger.insertOne([`burger_name`, `devoured`], [ req.body.name, req.body.devoured] ).then(function(result) {
//     res.sendStatus(200).end();
//   });
// })

module.exports = router;
