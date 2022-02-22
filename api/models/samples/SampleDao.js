const { BaseDao } = require('../../utils');

// TODO: use query builder!
class SampleDao extends BaseDao {
  constructor() {
    super();
  }

  getSample() {
    return '🎉 SAMPLE TEXT 🎉';
  }
}

module.exports = { SampleDao };
