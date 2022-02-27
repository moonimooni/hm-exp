require('dotenv').config();

const { merge } = require('lodash');
const env = process.env.NODE_ENV ?? 'local';
const isLocal = env === 'local' || env === 'test';

let config = { environment: env, ...require('./default') };
if (!isLocal) {
  config = merge(config, require(`./${env}`));
}

module.exports = config;
