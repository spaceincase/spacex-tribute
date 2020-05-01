var express = require('express');
var router = express.Router();

// GET missions page.
router.get('/', function(req, res, next) {
  res.render('missions');
});

// GET single mission.
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.render('missions');
});

module.exports = router;
