// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const { mysql } = require('../config');

module.exports = {
  local: mysql,

  development: mysql,

  production: mysql,
};
