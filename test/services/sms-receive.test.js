const assert = require('assert');
const app = require('../../src/app');

describe('\'sms-receive\' service', () => {
  it('registered the service', () => {
    const service = app.service('sms-receive');

    assert.ok(service, 'Registered the service');
  });
});
