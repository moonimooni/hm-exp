const { BaseDao } = require('../../../utils');
const { SampleDao } = require('../../../models/samples');

describe('SampleDao', () => {
  const sampleDao = new SampleDao();

  test.skip('sampleDao instance', () => {
    expect(sampleDao).toBeInstanceOf(SampleDao);
    expect(sampleDao).toBeInstanceOf(BaseDao);
  });
});
