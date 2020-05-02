var express = require('express');
var router = express.Router();
const spacexapi = require('../controllers/SpaceX.js');

// GET rockets page.
router.get('/', function(req, res, next) {
  spacexapi.buildNav().then(data => {
    res.render('rockets', {data: data})
  })
});

// GET single rocket.
router.get('/:id', (req, res) => {
  spacexapi.buildNav().then(data => {
    rocket = data.rockets.find(rocket => rocket.id == req.params.id)
    res.render('rocket/show', {data: data, rocket: rocket})
  })
})

module.exports = router;
