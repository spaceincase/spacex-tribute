var express = require('express');
var router = express.Router();
const spacex = require('../controllers/spacex');

// GET rockets page.
router.get('/', async (req, res) => {
  let nav = await spacex.getNav();
  let rockets = await spacex.checkCache('rockets');
  res.render('rockets', {nav:nav, rockets:rockets})
});

// GET single rocket.
router.get('/:id', async (req, res) => {
  console.log(req.params.id)
  let nav = await spacex.getNav();
  let rockets = await spacex.checkCache('rockets');
  let rocket = rockets.find(rocket => rocket.id == req.params.id)
  console.log(rocket);
  res.render('rocket/show', {nav:nav, rocket:rocket})
})

module.exports = router;
