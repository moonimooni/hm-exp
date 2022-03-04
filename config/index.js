require('dotenv').config();

const { merge } = require('lodash');
const env = process.env.NODE_ENV ?? 'local';

let config = { environment: env, ...require('./default') };
if (env !== 'local') {
  config = merge(config, require(`./${env}`));
}

module.exports = config;
