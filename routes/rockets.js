var express = require('express');
var router = express.Router();

// GET rockets page.
router.get('/', function(req, res, next) {
  res.render('rockets');
});

module.exports = router;
