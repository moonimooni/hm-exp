const Knex = require('knex');
const Builder = require('knex/lib/query/querybuilder');
const mysql = require('../global-database-setup/knexfile');
const { BaseDao } = require('../../utils');

describe('BaseDao', () => {
  let knex;

  beforeAll(async () => {
    knex = Knex(mysql);
    await knex.migrate.latest({
      directory: __dirname + '/../global-database-setup/migrations',
    });
    await knex.seed.run({
      directory: __dirname + '/../global-database-setup/seeds',
    });
  });

  afterAll(async () => {
    await knex.destroy();
  });

  const userDao = new BaseDao({ tableName: 'users' });

  test('BaseDao properties', async () => {
    expect(userDao.tableName).toBe('users');
    expect(userDao.queryBuilder).toBeInstanceOf(Builder);
  });

  test('selectAll', async () => {
    const users = await userDao.selectAll();
    expect(Array.isArray(users)).toBe(true);
    expect(users[0].id).toBe(1);
    expect(users[1].id).toBe(2);
    expect(users[2].id).toBe(3);
    expect(users[0].name).toBe('foo');
    expect(users[1].name).toBe('bar');
    expect(users[2].name).toBe('baz');
  });

  test('selectById', async () => {
    const user1 = await userDao.selectById(1);
    expect(Array.isArray(user1)).toBe(true);
    expect(user1).toHaveLength(1);
    expect(user1[0].id).toBe(1);
    expect(user1[0].name).toBe('foo');
  });
});
