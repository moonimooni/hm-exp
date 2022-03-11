exports.seed = async (knex) => {
  await knex.schema.raw(`
    TRUNCATE TABLE users;
  `);

  await knex.schema.raw(`
    INSERT INTO users (id, name) VALUES (1, 'foo'), (2, 'bar'), (3, 'baz');
  `);
};
