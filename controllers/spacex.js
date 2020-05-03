const { getAsync, setAsync, client } = require('./rediscache.js')
const axios = require('axios');

const APIEND = axios.create({
  baseURL: "https://api.spacexdata.com/v3/"
});

// Checks redis cache for existing key
// uses an api call as the callback.
async function checkCache(key) {
  let data = await getAsync(key);
  if (data) {
    return JSON.parse(data);
  } else {
    return await setCache(key);
  }
}

// Gets data from api and adds to redis cache
async function setCache(key) {
  const data = await APIEND.get(key)
  await setAsync(key, 300, JSON.stringify(data.data))
    .catch(console.error);
  return data.data;
}

async function getNav() {
  let rockets = await checkCache('rockets');
  let capsules = await checkCache('capsules');
  rockets = rockets.map(rocket => {
    return {id: rocket.id, name: rocket.rocket_name}
  });
  capsules = capsules.map(capsule => {
    return capsule.capsule_serial
  });
  return {
    rockets: rockets,
    capsules: capsules
  };
}

client.on("error", console.error);

exports.checkCache = checkCache;
exports.getNav = getNav;
