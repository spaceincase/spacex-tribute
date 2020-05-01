var express = require('express');
var router = express.Router();
const axios = require('axios');

const SPACEXAPI = 'https://api.spacexdata.com/v3/';
const FLICKRAPI = 'https://api.flickr.com/services/rest/';
const GETPHOTOS = '?method=flickr.people.getPublicPhotos&api_key=531e9c9800721cc6faf9fb9ec4cc9dfe&user_id=130608600%40N05&per_page=200 &format=json&nojsoncallback=1'


// GET home page.
router.get('/', function(req, res, next) {
  res.render('index');
});

// GET gallery page.
router.get('/gallery', function(req, res, next) {
  let data = [];
  axios.get(`${FLICKRAPI}${GETPHOTOS}`)
    .then(response => {
      response.data.photos.photo.forEach(photo => {
        data.push(buildFlickrURL(photo.farm, photo.server, photo.id, photo.secret))
      })
      res.render('gallery', {data: data})
    })
    .catch(error => {
      console.log(error);
    })
});

// GET about page.
router.get('/about', function(req, res, next) {
  res.render('about');
});

// GET history page.
router.get('/history', function(req, res, next) {
  res.render('history');
});

function buildFlickrURL(farmID, serverID, id, secret) {
  return `https://farm${farmID}.staticflickr.com/${serverID}/${id}_${secret}.jpg`
}

module.exports = router;
