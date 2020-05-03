const redis = require('redis');
const client = redis.createClient();
const { promisify } = require("util");
const setAsync = promisify(client.setex).bind(client);
const getAsync = promisify(client.get).bind(client);

exports.client = client;
exports.setAsync = setAsync;
exports.getAsync = getAsync;
