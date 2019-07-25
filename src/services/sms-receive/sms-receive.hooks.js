

const processReceiveMessage = require('../../hooks/process-receive-message');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [processReceiveMessage()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
