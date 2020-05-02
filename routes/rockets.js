var express = require('express');
var router = express.Router();
const spacexapi = require('../controllers/SpaceX.js');

// GET rockets page.
router.get('/', function(req, res, next) {
  spacexapi.buildNav().then(data => {
    res.render('rockets', {data: data})
  })
});

module.exports = router;
