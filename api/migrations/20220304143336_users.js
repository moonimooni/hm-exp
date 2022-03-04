/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.raw(`
    CREATE TABLE users (
      id INT unsigned NOT NULL AUTO_INCREMENT,
      type VARCHAR(255) NOT NULL COMMENT '사용자 유형',
      phone_number VARCHAR(255) NOT NULL COMMENT '사용자 전화번호',
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
