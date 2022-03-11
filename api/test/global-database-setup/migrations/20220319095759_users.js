/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.raw(`
    CREATE TABLE users (
      id INT unsigned NOT NULL AUTO_INCREMENT,
      name VARCHAR(255),
      PRIMARY KEY (id)
    )
  `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.raw(`
    DROP TABLE \`users\`
  `);
};
