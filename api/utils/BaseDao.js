const Knex = require('knex');
const config = require('../../config');

const databaseClient = Knex(config.mysql);

class BaseDao {
  /**
   * @readonly
   * @private
   */
  #client;

  /**@readonly */ tableName;
  /**@readonly */ queryBuilder;

  constructor({ tableName }) {
    this.tableName = tableName;
    this.#client = databaseClient;
    this.queryBuilder = this.#client(tableName);
  }

  async selectById(id) {
    return this.queryBuilder.where('id', id).limit(1);
  }

  async selectAll() {
    return this.queryBuilder.select('*');
  }
}

module.exports = { BaseDao };
