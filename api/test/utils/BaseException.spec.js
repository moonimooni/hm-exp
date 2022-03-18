const {
  BaseException,
  BadRequestException,
  UnauthorizedException,
  ForbiddenException,
  NotFoundException,
} = require('../../utils/BaseException');

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
  it("should throw Error with code 500 and message 'UNKNOWN ERROR' when no parameters were passed", () => {
    try {
      throw new BaseException();
    } catch (e) {
      expect(e.code).toBe(500);
      expect(e.message).toBe('UNKNOWN ERROR');
    }
  });
});

describe('BadRequsetException', () => {
  const data = { id: 'test' };
  it("should throw Error with code 400 and message 'BAD REQUEST' when no parameters were passed", () => {
    try {
      throw new BadRequestException();
    } catch (e) {
      expect(e.code).toBe(400);
      expect(e.message).toBe('BAD REQUEST');
    }
  });
  it('should throw Error with code 400 and message of entered message parameter', () => {
    try {
      const { id, password } = data;
      if (!password) {
        throw new BadRequestException('MUST BE INPUT PASSWORD');
      }
    } catch (error) {
      expect(error.code).toBe(400);
      expect(error.message).toBe('MUST BE INPUT PASSWORD');
    }
  });
});

describe('UnauthorizedException', () => {
  const data = { id: 'test', password: '1234' };
  it("should throw Error with code 401 and message 'UNAUTHORIZED' when no parameters were passed", () => {
    try {
      throw new UnauthorizedException();
    } catch (e) {
      expect(e.code).toBe(401);
      expect(e.message).toBe('UNAUTHORIZED');
    }
  });
  it('should throw Error with code 401 and message of entered message parameter', () => {
    try {
      const user1 = { id: 'test', password: '9999' };
      const { id, password } = data;
      if (user1.password !== password) {
        throw new UnauthorizedException('INVALID PASSWORD');
      }
    } catch (error) {
      expect(error.code).toBe(401);
      expect(error.message).toBe('INVALID PASSWORD');
    }
  });
});

describe('ForbiddenException', () => {
  it("should throw Error with code 403 and message 'FORBIDDEN' when no parameters were passed", () => {
    try {
      throw new ForbiddenException();
    } catch (e) {
      expect(e.code).toBe(403);
      expect(e.message).toBe('FORBIDDEN');
    }
  });
  it('should throw Error with code 403 and message of entered message parameter', () => {
    try {
      const data = { id: 'test' };
      const post = { author: 'test9999' };
      const method = 'DELETE';

      if (method !== 'GET' && post.author !== data.id) {
        throw new ForbiddenException('NO PERMISSION FOR OTHER AUTHORS POSTS');
      }
    } catch (error) {
      expect(error.code).toBe(403);
      expect(error.message).toBe('NO PERMISSION FOR OTHER AUTHORS POSTS');
    }
  });
});

describe('NotFoundException', () => {
  it("should throw Error with code 404 and message 'NOT FOUND' when no parameters were passed", () => {
    try {
      throw new NotFoundException();
    } catch (e) {
      expect(e.code).toBe(404);
      expect(e.message).toBe('NOT FOUND');
    }
  });
  it("should throw Error with code 404 and message 'NOT FOUND ${property}' of entered property parameter", () => {
    try {
      const posts = [1, 2, 3, 4, 5, 6, 7, 8];
      const req_post_id = 10;

      if (!posts.includes(req_post_id)) {
        throw new NotFoundException('POST');
      }
    } catch (error) {
      expect(error.code).toBe(404);
      expect(error.message).toBe('POST NOT FOUND');
    }
  });
});
