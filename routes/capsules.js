var express = require('express');
var router = express.Router();
const axios = require('axios');
const spacexapi = require('../controllers/spacex');

// GET capsules page.
router.get('/', function(req, res, next) {

});

// GET single capsule
router.get('/:id', (req, res) => {
  
})

module.exports = router;
