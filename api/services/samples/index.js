const { sampleDao } = require('../../models');
const { SampleService } = require('./SampleService');

const sampleService = new SampleService({ sampleDao });

module.exports = { sampleService };
