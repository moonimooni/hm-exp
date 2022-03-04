/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.raw(`
    CREATE TABLE categories (
      id INT unsigned NOT NULL AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL COMMENT '카테고리명',
      price INT unsigned NOT NULL DEFAULT '0' COMMENT '카테고리 기준 가격',
      parent_id INT unsigned COMMENT '부모 카테고리',
      PRIMARY KEY (id),

      CONSTRAINT categories_parent_id_foreign 
      FOREIGN KEY (parent_id) 
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
    DROP TABLE \`categories\`
  `);
};
