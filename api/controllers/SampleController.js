const { httpResponse } = require('../../utils');

class SampleController {
  constructor({ sampleService }) {
    this.sampleService = sampleService;
  }

  getSample(req, res) {
    try {
      const { message } = req.query;
      const sample = this.sampleService.getSampleWithMessage(message);
      return httpResponse.ok({ res, data: { sample } });
    } catch (error) {
      return httpResponse.error({ res, error });
    }
  }
}

module.exports = { SampleController };
