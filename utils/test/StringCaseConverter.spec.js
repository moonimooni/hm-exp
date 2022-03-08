const { toCamelCase, toSnakeCase } = require('../string/StringCaseConverter');

describe('StringCaseConverter', () => {
  describe('toCamelCase', () => {
    test('with non-string type parameter', () => {
      expect(toCamelCase()).toBeUndefined();
      expect(toCamelCase('')).toBe('');
      expect(toCamelCase(null)).toBeNull();
      expect(toCamelCase(undefined)).toBeUndefined();
      expect(toCamelCase(1)).toBe(1);
      expect(toCamelCase(true)).toBe(true);
      expect(toCamelCase({})).toEqual({});
      expect(toCamelCase([])).toEqual([]);
    });

    test('snake case to camel case', () => {
      const testStr1 = 'foo_bar';
      const testStr2 = 'foo_Bar';
      const testStr3 = 'foo__bar';

      expect(toCamelCase(testStr1)).toBe('fooBar');
      expect(toCamelCase(testStr2)).toBe('fooBar');
      expect(toCamelCase(testStr3)).toBe('fooBar');
    });

    test('snake case with digits to camel case', () => {
      const testStr1 = 'foo_1_bar';
      const testStr2 = '1_foo_bar_';
      const testStr3 = '1_2_3';

      expect(toCamelCase(testStr1)).toBe('foo_1Bar');
      expect(toCamelCase(testStr2)).toBe('1FooBar_');
      expect(toCamelCase(testStr3)).toBe(testStr3);
    });

    test('upper case to camel case', () => {
      const testStr1 = 'FOOBAR';
      const testStr2 = 'FOO BAR';
      const testStr3 = 'Foo Bar';

      expect(toCamelCase(testStr1)).toBe('foobar');
      expect(toCamelCase(testStr2)).toBe('fooBar');
      expect(toCamelCase(testStr3)).toBe('fooBar');
    });

    test('ignoring underscores of start & end of a string', () => {
      const testStr1 = '_fooBar';
      const testStr2 = 'fooBar_';
      const testStr3 = '_fooBar_';

      expect(toCamelCase(testStr1)).toBe(testStr1);
      expect(toCamelCase(testStr2)).toBe(testStr2);
      expect(toCamelCase(testStr3)).toBe(testStr3);
    });

    test('non snake case to camel case', () => {
      const testStr1 = 'foo-bar';
      const testStr2 = 'foo bar';
      const testStr3 = 'foo.bar';
      const testStr4 = 'foo,bar';

      expect(toCamelCase(testStr1)).toBe('fooBar');
      expect(toCamelCase(testStr2)).toBe('fooBar');
      expect(toCamelCase(testStr3)).toBe('fooBar');
      expect(toCamelCase(testStr4)).toBe('fooBar');
    });
  });

  describe('toSnakeCase', () => {
    test('with non-string type parameter', () => {
      expect(toSnakeCase()).toBeUndefined();
      expect(toSnakeCase('')).toBe('');
      expect(toSnakeCase(null)).toBeNull();
      expect(toSnakeCase(undefined)).toBeUndefined();
      expect(toSnakeCase(1)).toBe(1);
      expect(toSnakeCase(true)).toBe(true);
      expect(toSnakeCase({})).toEqual({});
      expect(toSnakeCase([])).toEqual([]);
    });

    test('camel case to snake case', () => {
      const testStr1 = 'fooBar';
      const testStr2 = 'fooBAr';
      const testStr3 = 'FooBar';

      expect(toSnakeCase(testStr1)).toBe('foo_bar');
      expect(toSnakeCase(testStr2)).toBe('foo_b_ar');
      expect(toSnakeCase(testStr3)).toBe('foo_bar');
    });

    test('camel case with digits to snake case', () => {
      const testStr1 = 'foo_1Bar';
      const testStr2 = '1FooBar_';
      const testStr3 = '1_2_3';

      expect(toSnakeCase(testStr1)).toBe('foo_1_bar');
      expect(toSnakeCase(testStr2)).toBe('1_foo_bar_');
      expect(toSnakeCase(testStr3)).toBe(testStr3);
    });

    test('upper case to snake case', () => {
      const testStr1 = 'FOOBAR';
      const testStr2 = 'FOO BAR';
      const testStr3 = 'Foo Bar';

      expect(toSnakeCase(testStr1)).toBe('foobar');
      expect(toSnakeCase(testStr2)).toBe('foo_bar');
      expect(toSnakeCase(testStr3)).toBe('foo_bar');
    });

    test('ignoring underscores of start & end of a string', () => {
      const testStr1 = '_foo_bar';
      const testStr2 = 'foo_bar_';
      const testStr3 = '_foo_bar_';

      expect(toSnakeCase(testStr1)).toBe(testStr1);
      expect(toSnakeCase(testStr2)).toBe(testStr2);
      expect(toSnakeCase(testStr3)).toBe(testStr3);
    });

    test('non camel case to snake case', () => {
      const testStr1 = 'foo-bar';
      const testStr2 = 'foo bar';
      const testStr3 = 'foo.bar';
      const testStr4 = 'foo,bar';

      expect(toSnakeCase(testStr1)).toBe('foo_bar');
      expect(toSnakeCase(testStr2)).toBe('foo_bar');
      expect(toSnakeCase(testStr3)).toBe('foo_bar');
      expect(toSnakeCase(testStr4)).toBe('foo_bar');
    });
  });
});
