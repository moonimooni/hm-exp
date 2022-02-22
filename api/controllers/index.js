const { sampleService } = require('../services');
const { SampleController } = require('./SampleController');

const sampleController = new SampleController({ sampleService });

module.exports = { sampleController };
