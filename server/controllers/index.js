var models = require('../models/index');
var http = require('http');


//**use models/index.js helper functions

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      //http.get()
      //send get request to get all messages 
      //models.messages.get(callback)

    }, 
    // a function which handles posting a message to the database
    post: function (req, res) {
      //models.messages.post(message, callback)
    } 
  },

  users: {
    get: function (req, res) {
      //models.users.get(callback)
    },
    post: function (req, res) {
      //models.users.post(message, callback)
    }
  }
};

