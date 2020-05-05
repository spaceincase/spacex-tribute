var express = require('express');
var router = express.Router();
const spacex = require('../controllers/spacex');

// GET capsules page.
router.get('/', async function(req, res, next) {
  let capsules = await spacex.checkCache('capsules');
  res.render('capsules', {nav:req.nav, capsules:capsules})
});

// GET single capsule
router.get('/:id', async (req, res) => {
  let capsules = await spacex.checkCache('capsules');
  let capsule = capsules.find(capsule => capsule.capsule_serial == req.params.id)
  res.render('capsules', {nav:req.nav, capsules:capsules})
})

module.exports = router;
