// const config = require('../../../config');
// const { httpRequest } = require('../../../utils');
import config from '../config';
import { httpRequest } from '../../../utils';

// XXX: extends HttpClient instead of injecting it as a property?
export class ApiClient {
  httpRequest = httpRequest;

  constructor({ url, ...arg }) {
    this.httpRequest.baseUrl = config.api?.baseUrl ?? config.apiUrl;
    this.url = url;
    Object.assign(this, arg);
  }

  /**
   *
   * @param {Promise} request
   * @returns {Object} data
   * @private
   */
  async _sendRequestAndGetResponse(request) {
    try {
      const response = await request;
      return response.data;
    } catch (err) {
      // TODO: use logger!!
      console.error(err);
    }
  }

  get({ params }) {
    const request = this.httpRequest.get({ url: this.url, params });
    return this._sendRequestAndGetResponse(request);
  }

  post({ params, data }) {
    const request = this.httpRequest.post({ url: this.url, data, params });
    return this._sendRequestAndGetResponse(request);
  }

  put({ params, data }) {
    const request = this.httpRequest.put({ url: this.url, data, params });
    return this._sendRequestAndGetResponse(request);
  }

  delete({ params }) {
    const request = this.httpRequest.delete({ url: this.url, params });
    return this._sendRequestAndGetResponse(request);
  }
}
