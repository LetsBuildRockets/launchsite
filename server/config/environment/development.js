'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/launchsite-dev'
	//uri: 'mongodb://192.168.1.10/launchsite-dev'
  },

  seedDB: true
};
