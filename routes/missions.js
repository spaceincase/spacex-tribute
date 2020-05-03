var express = require('express');
var router = express.Router();
const spacexapi = require('../controllers/spacex');

// GET missions page.
router.get('/', function(req, res, next) {

});

// GET single mission.
router.get('/:id', (req, res) => {
  
});

module.exports = router;
