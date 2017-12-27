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
    post: function (username, text, roomname, callback) {
      dbConnect.databaseConnection('INSERT IGNORE INTO users (name) VALUES (?)', username, 
        dbConnect.databaseConnection('INSERT IGNORE INTO rooms (name) VALUES (?)', roomname, 
          dbConnect.databaseConnection('INSERT INTO messages (username, text, roomname) VALUES ((SELECT id from users WHERE name = ?),?,(SELECT id from rooms WHERE name = ?))', username, function(results) {
            console.log('insert roomname:', results);
            callback(results);
          })
        )
      );    
    } 
  },

  users: {
    // Ditto as above.
    //callback performs action on all rows and all columns of users table
    get: function(callback) {
      dbConnect.databaseConnection('SELECT * FROM users', null, function(rows) {
        console.log('all users: ', rows);
        return callback(rows);
      });
    },
    post: function (message, callback) {
      dbConnect.databaseConnection('INSERT INTO users (name) VALUES (?)', message, function(results) {
        console.log('insert user:', results);
        return callback(results);
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
      dbConnect.databaseConnection('INSERT INTO rooms (name) VALUES (?)', message, function(results) {
        console.log('insert room:', results);
        callback(results);
      });
    }
  }
};

