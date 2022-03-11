/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.raw(`
    CREATE TABLE order_items (
      id INT unsigned NOT NULL AUTO_INCREMENT,
      order_id INT unsigned NOT NULL,
      product_id INT unsigned NOT NULL,
      item_options JSON DEFAULT (JSON_ARRAY()),
      quantity INT unsigned NOT NULL,
      PRIMARY KEY (id),

      CONSTRAINT order_items_order_id_foreign
      FOREIGN KEY (order_id)
      REFERENCES orders (id),

      CONSTRAINT order_items_product_id_foreign
      FOREIGN KEY (product_id)
      REFERENCES products (id)
    )
  `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.raw(`
    DROP TABLE \`order_items\`
  `);
};
