
const { authenticate } = require('@feathersjs/authentication').hooks;

const articleCreate = require('../../hooks/article-create');

const articleFind = require('../../hooks/article-find');

const articleGet = require('../../hooks/article-get');

const articleUpdate = require('../../hooks/article-update');

const articleDelete = require('../../hooks/article-delete');

const authenticateif = require('../../hooks/authenticateif');

const articleDeleteResponse = require('../../hooks/article-delete-response');

module.exports = {
  before: {
    all: [],
    find: [authenticateif(),articleFind()],
    get: [authenticateif(),articleGet()],
    create: [authenticate('jwt'), articleCreate()],
    update: [authenticate('jwt'), articleUpdate()],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt'), articleDelete()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [articleDeleteResponse()]
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
