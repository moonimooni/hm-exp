const express = require('express');
const supertest = require('supertest');
const { SampleController } = require('../../controllers/SampleController');

describe('SampleController', () => {
  const createTestApp = ({ sampleService }) => {
    const controller = new SampleController({ sampleService });
    const app = express()
      .use(express.json())
      .use('/sample', controller.getSample.bind(controller));

    return supertest(app);
  };

  describe('getSample', () => {
    it('should return ok', async () => {
      const sampleService = {
        getSampleWithMessage: jest.fn().mockReturnValueOnce('FOO'),
      };

      await createTestApp({ sampleService })
        .get('/sample')
        .query({ message: 'FOO' })
        .expect(200)
        .expect({ data: { sample: 'FOO' } });

      expect(sampleService.getSampleWithMessage.mock.calls.length).toBe(1);
      expect(sampleService.getSampleWithMessage.mock.calls[0][0]).toBe('FOO');
    });

    it('should return error', async () => {
      const testError = new Error('FOO');
      testError.code = 400;

      // TODO: use mockRejectedValueOnce function
      const sampleService = {
        getSampleWithMessage: () => {
          throw testError;
        },
      };

      await createTestApp({ sampleService })
        .get('/sample')
        .query({ message: 'FOO' })
        .expect(400)
        .expect({ code: 400, message: 'FOO' });
    });
  });
});
