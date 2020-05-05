var express = require('express');
var router = express.Router();
const axios = require('axios');
const spacex = require('../controllers/spacex');
const flickr = require('../controllers/flickr')

// GET home page.
router.get('/', async function(req, res, next) {
  let nextLaunch = await spacex.checkCache('launches/next');
  let starman = await spacex.checkCache('roadster');
  res.render('index', {nav: req.nav, nextLaunch: nextLaunch, starman: starman});
});

// GET gallery page.
router.get('/gallery', async function(req, res, next) {
  let pics = await flickr.checkCache();
  res.render('gallery', {pics:pics, nav:req.nav})
});

// GET about page.
router.get('/about', async function(req, res, next) {
  let info = await spacex.checkCache('info');
  res.render('about', {nav:req.nav, info:info})
});

// GET history page.
router.get('/history', async function(req, res, next) {
  let history = await spacex.checkCache('history');
  res.render('history', {nav:req.nav, history:history})
});


module.exports = router;
