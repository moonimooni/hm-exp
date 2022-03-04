/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.raw(`
    CREATE TABLE product_options (
      id INT unsigned NOT NULL AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL COMMENT '상품 옵션 이름',
      description VARCHAR(255) COMMENT '상품 옵션 설명',
      is_available BOOL COMMENT '상품 옵션 거래 가능 여부',
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
    DROP TABLE \`product_options\`
  `);
};
