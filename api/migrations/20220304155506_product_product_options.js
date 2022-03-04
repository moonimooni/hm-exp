/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.raw(`
    CREATE TABLE product_product_options (
      id INT unsigned NOT NULL AUTO_INCREMENT,
      product_id INT unsigned NOT NULL,
      product_options_id INT unsigned NOT NULL,
      PRIMARY KEY (id),

      CONSTRAINT product_product_options_product_id
      FOREIGN KEY (product_id)
      REFERENCES products (id),

      CONSTRAINT product_product_options_product_options_id
      FOREIGN KEY (product_options_id)
      REFERENCES product_options (id)
    )
  `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.raw(`
    DROP TABLE \`product_product_options\`
  `);
};
