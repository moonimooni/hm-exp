/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.raw(`
    CREATE TABLE orders (
      id INT unsigned NOT NULL AUTO_INCREMENT,
      user_id INT unsigned NOT NULL,
      paying_user_id INT unsigned NOT NULL,
      status VARCHAR(255) NOT NULL,
      price INT NOT NULL,
      message VARCHAR(255),
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      PRIMARY KEY (id),

      CONSTRAINT orders_user_id_foreign
      FOREIGN KEY (user_id)
      REFERENCES users (id),

      CONSTRAINT orders_paying_user_id_foreign
      FOREIGN KEY (paying_user_id)
      REFERENCES users (id)
    )
  `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.raw(`
    DROP TABLE \`orders\`
  `);
};
