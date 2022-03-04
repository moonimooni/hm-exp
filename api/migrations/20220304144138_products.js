/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.raw(`
    CREATE TABLE products (
      id INT unsigned NOT NULL AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL COMMENT '상품명',
      is_available BOOL NOT NULL COMMENT '상품 거래 가능 여부',
      category_id INT unsigned COMMENT '상품 카테고리',
      PRIMARY KEY (id),

      CONSTRAINT products_category_id_foreign 
      FOREIGN KEY (category_id) 
      REFERENCES categories (id)
    )
  `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.raw(`
    DROP TABLE \`products\`
  `);
};
