require('dotenv').config();

const { merge } = require('lodash');
const env = process.env.NODE_ENV ?? 'local';
const config = { environment: env, ...require('./default') };
const isLocal = env === 'local' || env === 'test';

if (!isLocal) {
  config = merge(config, require(`./${env}`));
}

module.exports = config;
