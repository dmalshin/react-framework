const ItemsDelegate = require(`${
  sails.config.appPath
}/api/delegates/items/ItemsDelegate.js`)

module.exports = {
  generate() {
    ItemsDelegate.initialize()
  },
}
