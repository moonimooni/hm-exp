const {
  API_PORT_LOCAL,
  API_BASE_URL_LOCAL,
  WEB_PORT_LOCAL,
  WEB_BASE_URL_LOCAL,
  MYSQL_PORT,
  MYSQL_ROOT_PASSWORD,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  LANG,
  HOSTNAME,
  DATABASE_URL,
} = process.env;

module.exports = {
  api: {
    baseUrl: API_BASE_URL_LOCAL,
    port: API_PORT_LOCAL,
  },
  web: {
    baseUrl: WEB_BASE_URL_LOCAL,
    port: WEB_PORT_LOCAL,
  },
  mysql: {
    client: 'mysql2',
    connection: {
      host: HOSTNAME,
      port: MYSQL_PORT,
      user: MYSQL_USER,
      password: MYSQL_ROOT_PASSWORD,
      database: MYSQL_DATABASE,
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
