var express = require('express');
var router = express.Router();
const spacexapi = require('../controllers/SpaceX.js');

// GET missions page.
router.get('/', function(req, res, next) {
  spacexapi.buildNav().then(data => {
    res.render('missions', {data: data})
  })
});

// GET single mission.
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.render('missions');
});

module.exports = router;
