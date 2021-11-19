// Application hooks that run for every service
const log = require('./hooks/log');

const errorsResponse = require('./hooks/errors-response');


const extractToken = require('./hooks/extract-token');


module.exports = {
  before: {
    all: [log(), extractToken()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [log()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [log(), errorsResponse()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
