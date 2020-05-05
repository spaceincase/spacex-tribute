var express = require('express');
var router = express.Router();
const spacex = require('../controllers/spacex');

router.get('/', async (req, res) => {
  res.render('vehicles/index');
})

// GET rockets page.
router.get('/rockets', async (req, res) => {
  let rockets = await spacex.checkCache('rockets');
  res.render('rockets', {nav:req.nav, rockets:rockets})
});

// GET single rocket.
router.get('/rockets/:id', async (req, res) => {
  let rockets = await spacex.checkCache('rockets');
  let rocket = rockets.find(rocket => rocket.id == req.params.id)
  res.render('rocket/show', {nav:req.nav, rocket:rocket})
})


module.exports = router;
