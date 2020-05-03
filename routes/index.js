var express = require('express');
var router = express.Router();
const axios = require('axios');
const spacex = require('../controllers/spacex');
const flickr = require('../controllers/flickr')



// GET home page.
router.get('/', async function(req, res, next) {
  let starman = await spacex.checkCache('roadster');
  let nav = await spacex.getNav();
  res.render('index', {nav: nav, starman: starman});
});

// GET gallery page.
router.get('/gallery', async function(req, res, next) {
  let pics = await flickr.checkCache();
  let nav = await spacex.getNav();
  res.render('gallery', {pics:pics, nav:nav})
});

// GET about page.
router.get('/about', async function(req, res, next) {
  let nav = await spacex.getNav();
  let info = await spacex.checkCache('info');
  res.render('about', {nav:nav, info:info})
});

// GET history page.
router.get('/history', async function(req, res, next) {
  let nav = await spacex.getNav();
  let history = await spacex.checkCache('history');
});


module.exports = router;
