const uuidV4 = require('uuid').v4

module.exports = {
  friendlyName: 'Get uuid',

  description: '',

  inputs: {},

  exits: {
    success: {
      outputFriendlyName: 'uuid',
      outputType: 'ref',
    },
  },

  fn: async function(inputs, exits) {
    // Get uuid.
    const uuid = uuidV4()

    // Send back the result through the success exit.
    return exits.success(uuid)
  },
}
