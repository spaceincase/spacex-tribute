var express = require('express');
var router = express.Router();
const axios = require('axios');
const spacexapi = require('../controllers/SpaceX.js');


// Set flickr API endpoint
const flickr = axios.create({
  baseURL: 'https://api.flickr.com/services/rest/',
});

// flickr params for spaceX photos
const flickrParams = {
  params: {
    method: "flickr.people.getPublicPhotos",
    api_key: '531e9c9800721cc6faf9fb9ec4cc9dfe',
    user_id: '130608600@N05',
    per_page: 200,
    format: "json",
    nojsoncallback: 1
  }
}


// GET home page.
router.get('/', function(req, res, next) {
  spacexapi.buildNav().then(data => {
    res.render('index', {data: data})
  })
});

// GET gallery page.
router.get('/gallery', function(req, res, next) {
  let pics = [];
  flickr('/', flickrParams)
    .then(response => {
      response.data.photos.photo.forEach(photo => {
        pics.push(buildFlickrURL(photo.farm, photo.server, photo.id, photo.secret))
      })
      spacexapi.buildNav().then(data => {
        res.render('gallery', {pics: pics, data: data})
      })

    })
    .catch(error => {
      console.log(error);
    });
});

// GET about page.
router.get('/about', function(req, res, next) {
  spacexapi.buildNav().then(data => {
    res.render('about', {data: data})
  })
});

// GET history page.
router.get('/history', function(req, res, next) {
  spacexapi.buildNav().then(data => {
    res.render('history', {data: data})
  })
});

// Build usable flickr api url
function buildFlickrURL(farmID, serverID, id, secret) {
  return `https://farm${farmID}.staticflickr.com/${serverID}/${id}_${secret}.jpg`
}

module.exports = router;
