var express = require('express');
var router = express.Router();
const axios = require('axios');

// GET capsules page.
router.get('/', function(req, res, next) {
  res.render('capsules');
});

module.exports = router;
