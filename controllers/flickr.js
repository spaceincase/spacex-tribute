const { getAsync, setAsync, client } = require('./rediscache.js')
const axios = require('axios');
let Flickr = require('flickr-sdk')

const APIKEY = process.env.FLICKR_API_KEY || "531e9c9800721cc6faf9fb9ec4cc9dfe";

let flickr = new Flickr(APIKEY);

// Checks redis cache for photos
async function checkCache() {
  let photos = await getAsync('photos');
  if (photos) {
    return JSON.parse(photos);
  } else {
    return await setCache();
  }
}

//Gets photos from api and adds to redis cache
async function setCache() {
  let photos = await createPhotoArray();
  await setAsync('photos', 10, JSON.stringify(photos))
    .catch(console.error);
  return photos;
}

// Use flickr sdk to create an array of photo urls
async function createPhotoArray() {
  let res = await flickr.people.findByUsername({username: "official spacex photos"}).catch(console.error);
  let userid = res.body.user.id;
  res = await flickr.people.getPublicPhotos({user_id: userid})
  let photos = res.body.photos.photo.map(photo => {
    return createImgUrl(photo)
  })
  return photos;
}

// Build usable flickr image url
function createImgUrl(photo) {
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
}

client.on("error", console.error);

exports.checkCache = checkCache;
