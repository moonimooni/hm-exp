class SampleService {
  constructor({ sampleDao }) {
    this.sampleDao = sampleDao;
  }

  getSampleWithMessage(message) {
    try {
      if (!message) {
        // TODO: make utility of exceptions
        const badRequestException = new Error('message is required');
        badRequestException.code = 400;
        throw badRequestException;
      }
      return this.sampleDao.getSample() + ' ' + message;
    } catch (error) {
      // TODO: use logger
      throw error;
    }
  }
}

module.exports = {
  SampleService,
};
