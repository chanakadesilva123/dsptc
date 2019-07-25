// Initializes the `sms-receive` service on path `/sms-receive`
const createService = require('feathers-mongoose');
const createModel = require('../../models/sms-receive.model');
const hooks = require('./sms-receive.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sms-receive', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('sms-receive');

  service.hooks(hooks);
};
