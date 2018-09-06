/* global sails */

const _ = require('lodash')

const ItemsDelegate = require(`${
  sails.config.appPath
}/api/delegates/items/ItemsDelegate`)
const itemsController = 'Items/ItemsController'

_.defaults(sails.config.routes, {
  'get /api/items': {
    controller: itemsController,
    action: 'findAll',
  },

  'post /api/items': {
    controller: itemsController,
    action: 'create',
  },

  'put /api/items/:id': {
    controller: itemsController,
    action: 'update',
  },

  'delete /api/items/:id': {
    controller: itemsController,
    action: 'delete',
  },
})

module.exports = {
  findAll: ItemsDelegate.findAll,
  create: ItemsDelegate.create,
  update: ItemsDelegate.update,
  delete: ItemsDelegate.delete,
}
