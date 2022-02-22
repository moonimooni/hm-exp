const { Router } = require('express');
const { SampleRoutes } = require('./SampleRoutes');
const { sampleController } = require('../controllers');

const router = Router();
new SampleRoutes({ router, sampleController });

module.exports = { router };
