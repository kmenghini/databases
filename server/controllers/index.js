var models = require('../models/index');
var http = require('http');


//**use models/index.js helper functions

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get(function(result) {
        console.log('messages.get....', result);
      });
      //send get request to get all messages 
    }, 
    // a function which handles posting a message to the database
    post: function (req, res) {
      console.log('test');

      models.messages.post(req.body.username, req.body.text, req.body.roomname, function(results) {
        return results;
      });
      console.log(req.body);
    } 
  },

  users: {
    get: function (req, res) {
      models.users.get(function(result) {
        console.log('users.get....', result);
      });
    },
    post: function (req, res) {
      models.users.post(req.body.username, function(results) {
        console.log(3, results);
        return;
      });
      // console.log(req.body);
    }
  }
};

