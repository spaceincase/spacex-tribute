var express = require('express');
var router = express.Router();

// GET rockets page.
router.get('/rockets', function(req, res, next) {
  res.render('rockets');
});

module.exports = router;
