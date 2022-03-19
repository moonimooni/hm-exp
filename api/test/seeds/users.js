exports.seed = async (knex) => {
  await knex.schema.raw(`
    TRUNCATE TABLE users;
  `);

  await knex.schema.raw(`
    INSERT INTO users (id, type, phone_number) 
    VALUES (1, 'MOM', '010-0000-0000'), (2, 'DAD', '010-0000-0001'), (3, 'SISTER', '010-0000-0002');
  `);
};
