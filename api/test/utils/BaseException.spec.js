const { BaseException } = require('../../utils/BaseException');

describe('BaseException', () => {
  it('should be throw Error with code and message of the entered parameters.', () => {
    const code = 400;
    const message = 'test message';
    try {
      throw new BaseException({ code, message });
    } catch (e) {
      expect(e.code).toBe(code);
      expect(e.message).toBe(message);
    }
  });
  it("should throw Error with code 500 and message 'unknown error' when no parameters were passed", () => {
    try {
      throw new BaseException();
    } catch (e) {
      expect(e.code).toBe(500);
      expect(e.message).toBe('unknown error');
    }
  });
});
