const axios = require('axios');

// Set spaceX API endpoint
const spaceX = axios.create({
  baseURL: "https://api.spacexdata.com/v3/"
})

// Get list of rockets from api for navbar
function getRockets() {
  return spaceX.get('/rockets');
}

// Get list of capsules from api for navbar
function getCapsules() {
  return spaceX.get('/capsules');
}

function getStarman() {
  return spaceX.get('/roadster');
}

// Parse rocket and capsule data into single object
function buildNav() {
  return axios.all([getRockets(), getCapsules()])
    .then(axios.spread((rockets, capsules) => {
      let data = {};
      data.rockets = Array.from(rockets.data).map(rocket => {
        return rocket;
      });
      data.capsules = Array.from(capsules.data).map(capsule => {
        return capsule;
      });
      return data;
    }))
    .catch(axios.spread((rockets, capsules) => {
      console.log(rockets, capsules);
    }))
}

exports.buildNav = buildNav;
exports.getRockets = getRockets;
exports.getCapsules = getCapsules;
exports.getStarman = getStarman;
