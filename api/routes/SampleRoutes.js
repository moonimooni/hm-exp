class SampleRoutes {
  constructor({ router, sampleController }) {
    this.sampleController = sampleController;
    this.router = router;
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.get(
      '/sample',
      this.sampleController.getSample.bind(this.sampleController)
    );
  }
}

module.exports = { SampleRoutes };
