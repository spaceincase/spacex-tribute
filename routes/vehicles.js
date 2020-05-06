var express = require('express');
var router = express.Router();
const spacex = require('../controllers/spacex');

router.get('/', async (req, res) => {
  let rockets = await spacex.checkCache('rockets');
  let dragons = await spacex.checkCache('dragons');
  let ships = await spacex.checkCache('ships');
  let vehicles = {
    rockets: rockets,
    dragons: dragons,
    ships: ships
  }
  res.render('vehicles/index', {vehicles: vehicles});
})

// GET rockets page.
router.get('/rockets', async (req, res) => {
  let rockets = await spacex.checkCache('rockets');
  res.render('rockets', {nav:req.nav, rockets:rockets})
});

// GET single rocket.
router.get('/rockets/:id', async (req, res) => {
  let rockets = await spacex.checkCache('rockets');
  let launches = await spacex.checkCache('launches');
  let rocket = rockets.find(rocket => rocket.id == req.params.id)
  launches = launches.filter(launch => {
    return launch.rocket.rocket_name == rocket.rocket_name;
  })
  res.render('rocket/show', {nav:req.nav, rocket:rocket, launches:launches})
})


module.exports = router;
