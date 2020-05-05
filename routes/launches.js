var express = require('express');
var router = express.Router();
const spacex = require('../controllers/spacex');

// GET missions page.
router.get('/', async function(req, res, next) {
  let launches = await spacex.checkCache('launches');
  res.render('launches', {nav:req.nav, launches:launches})
});

// GET single mission.
router.get('/:id', async (req, res) => {
  let launches = await spacex.checkCache('launches');
  let launch = launches.find(launch => launch.id == req.params.id)
  res.render('launches', {nav:req.nav, missions:launches})
});

module.exports = router;
