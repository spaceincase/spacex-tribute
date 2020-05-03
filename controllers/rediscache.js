const redis = require('redis');
const client = redis.createClient(process.env.REDIS_URL || 8080);
const { promisify } = require("util");
const setAsync = promisify(client.setex).bind(client);
const getAsync = promisify(client.get).bind(client);

exports.client = client;
exports.setAsync = setAsync;
exports.getAsync = getAsync;
