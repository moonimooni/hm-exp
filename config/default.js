const {
  API_PORT_LOCAL,
  API_BASE_URL_LOCAL,
  WEB_PORT_LOCAL,
  WEB_BASE_URL_LOCAL,
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
};
