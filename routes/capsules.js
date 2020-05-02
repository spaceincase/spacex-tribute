var express = require('express');
var router = express.Router();
const axios = require('axios');
const spacexapi = require('../controllers/SpaceX.js');

// GET capsules page.
router.get('/', function(req, res, next) {
  spacexapi.buildNav().then(data => {
    res.render('capsules', {data: data})
  })
});

module.exports = router;
