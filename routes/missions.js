var express = require('express');
var router = express.Router();

// GET missions page.
router.get('/missions', function(req, res, next) {
  res.render('missions');
});

module.exports = router;
