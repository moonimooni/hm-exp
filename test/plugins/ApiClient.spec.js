const { ApiClient } = require('../../src/plugins/lib/ApiClient');
const { httpRequest } = require('../../utils');

// import ApiClient from '../ApiClient';
// import { httpRequest } from '../../../../utils';

jest.mock('axios');
jest.mock('../../src/plugins/config', () => ({
  api: {
    baseUrl: 'http://foo:3000',
    port: 3000,
  },
}));

describe('ApiClient', () => {
  const testClient = new ApiClient({
    url: '/foo/:id',
    foo: new ApiClient({ url: '/foo/bar' }),
  });

  test('properties', () => {
    expect(testClient.url).toBe('/foo/:id');
    expect(testClient.foo.url).toBe('/foo/bar');
    expect(testClient.httpRequest.baseUrl).not.toBeNull();
  });

  test('GET method', async () => {
    const testParams = { foo: 'bar' };
    jest.spyOn(httpRequest, 'get').mockImplementation(({ url, params }) => {
      return Promise.resolve({ data: { url, params } });
    });

    const r1 = await testClient.get({ params: testParams });
    const r2 = await testClient.foo.get({ params: testParams });

    expect(r1).toEqual({ url: '/foo/:id', params: testParams });
    expect(r2).toEqual({ url: '/foo/bar', params: testParams });
    expect(httpRequest.get).toHaveBeenCalledTimes(2);
  });
});
