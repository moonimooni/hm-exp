const { sampleDao } = require('../../../models');
const { sampleService } = require('../../../services/samples');

jest.mock('../../../models');

describe('sampleService', () => {
  sampleDao.getSample.mockReturnValueOnce('FOO');

  describe('getSampleWithMessage', () => {
    it('should return text with FOO', () => {
      expect(sampleService.getSampleWithMessage('BAR')).toBe('FOO BAR');
    });

    it('should throw with empty parameter', () => {
      expect(() => sampleService.getSampleWithMessage()).toThrow();
    });
  });
});
