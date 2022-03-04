module.exports = {
  api: {
    baseUrl: 'localhost',
    port: 8081,
  },
  web: {
    baseUrl: 'localhost',
    port: 8080,
  },
  mysql: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'hm_local',
      charset: 'utf8mb4',
      timezone: 'Z',
      decimalNumbers: true,
    },
    pool: {
      min: 0,
      max: 10,
    },
  },
};
