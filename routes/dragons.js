var express = require('express');
var router = express.Router();
const spacex = require('../controllers/spacex');

// GET dragons page.
router.get('/', async function(req, res, next) {
  let dragons = await spacex.checkCache('dragons');
  res.render('dragons', {nav:req.nav, dragons:dragons})
});

// GET single dragon
router.get('/:id', async (req, res) => {
  let dragons = await spacex.checkCache('dragons');
  let dragon = dragons.find(dragon => dragon.id == req.params.id)
  res.render('dragon/show', {nav:req.nav, dragons:dragons})
})

module.exports = router;
