const { snakeCase, camelCase } = require('change-case');

/**
 *
 * @param {string} str
 * @returns snake-cased str
 */
const toSnakeCase = (str) => {
  if (typeof str !== 'string') {
    return str;
  }

  const isStartWithUnderscore = str.at(0) === '_';
  const isEndWithUnderscore = str.at(-1) === '_';

  let snakeCasedStr = snakeCase(str);

  if (isStartWithUnderscore) {
    snakeCasedStr = `_${snakeCasedStr}`;
  }
  if (isEndWithUnderscore) {
    snakeCasedStr = `${snakeCasedStr}_`;
  }
  return snakeCasedStr;
};

/**
 *
 * @param {string} str
 * @returns camel-cased str
 */
const toCamelCase = (str) => {
  if (typeof str !== 'string') {
    return str;
  }

  const isStartWithUnderscore = str.at(0) === '_';
  const isEndWithUnderscore = str.at(-1) === '_';

  let camelizedStr = camelCase(str, {
    splitRegexp: /([a-z])([A-Z0-9])/g,
  });

  if (isStartWithUnderscore) {
    camelizedStr = `_${camelizedStr}`;
  }
  if (isEndWithUnderscore) {
    camelizedStr = `${camelizedStr}_`;
  }
  return camelizedStr;
};

module.exports = { toSnakeCase, toCamelCase };
