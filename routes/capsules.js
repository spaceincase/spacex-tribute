var express = require('express');
var router = express.Router();
const axios = require('axios');
const spacexapi = require('../controllers/SpaceX.js');

// GET capsules page.
router.get('/', function(req, res, next) {
  spacexapi.buildNav().then(data => {
    res.render('capsules', {data: data})
  })
});

// GET single capsule
router.get('/:id', (req, res) => {
  spacexapi.buildNav().then(data => {
    capsule = data.capsules.find(capsule => capsule.capsule_serial == req.params.id)
    console.log(capsule);
    res.render('capsule/show', {data: data, capsule: capsule})
  })
})

module.exports = router;
