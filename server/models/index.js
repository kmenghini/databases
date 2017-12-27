//var db = require('../db');
var dbConnect = require('../db/index');

module.exports = {
  messages: {
    // a function which produces all the messages
    //callback performs action on all rows and all columns of messages table
    get: function(callback) {
      dbConnect.databaseConnection('SELECT * FROM messages', null, function(rows) {
        console.log('all messages: ', rows);
        callback(rows);
      });
    },
    
    // a function which can be used to insert a message into the database
    //results might be only the message that was recently added, but that's ok bc a get request should follow
    post: function (message, callback) {
      dbConnect.databaseConnection('INSERT INTO messages SET ?', message, function(results) {
        console.log('insert message:', results);
        callback(results);
      });
    } 
  },

  users: {
    // Ditto as above.
    //callback performs action on all rows and all columns of users table
    get: function(callback) {
      dbConnect.databaseConnection('SELECT * FROM users', null, function(rows) {
        console.log('all users: ', rows);
        callback(rows);
      });
    },
    post: function (message, callback) {
      dbConnect.databaseConnection('INSERT INTO users SET ?', message, function(results) {
        console.log('insert user:', results);
        callback(results);
      });
    }
  },

  rooms: {
    get: function(callback) {
      dbConnect.databaseConnection('SELECT * FROM rooms', null, function(rows) {
        console.log('all rooms: ', rows);
        callback(rows);
      });
    },
    post: function (message, callback) {
      dbConnect.databaseConnection('INSERT INTO rooms SET ?', message, function(results) {
        console.log('insert room:', results);
        callback(results);
      });
    }
  }
};

