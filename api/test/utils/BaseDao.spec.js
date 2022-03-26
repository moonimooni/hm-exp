const Knex = require('knex');
const Builder = require('knex/lib/query/querybuilder');
const mysql = require('../../knexfile');
const { BaseDao } = require('../../utils');

describe('BaseDao', () => {
  let knex;

  beforeAll(async () => {
    knex = Knex(mysql);
    await knex.migrate.latest({
      directory: __dirname + '/../../migrations',
    });
    await knex.seed.run({
      directory: __dirname + '/../seeds',
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
    expect(users[0].type).toBe('MOM');
    expect(users[1].type).toBe('DAD');
    expect(users[2].type).toBe('SISTER');
  });

  test('selectById', async () => {
    const user1 = await userDao.selectById(1);
    expect(Array.isArray(user1)).toBe(true);
    expect(user1).toHaveLength(1);
    expect(user1[0].id).toBe(1);
    expect(user1[0].type).toBe('MOM');
    expect(user1[0].phone_number).toBe('010-0000-0000');
  });
});
