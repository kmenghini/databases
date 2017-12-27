var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = {
  databaseConnection: function(queryString, message, callback) {
    // console.log(queryString, message);
    var connection = mysql.createConnection({
      user: 'root',
      database: 'chat'
    });
    connection.connect();
    connection.query(queryString, message, function(error, rows) {
      console.log(queryString, message);
      
      if (error) {
        console.log(error);
      }
      console.log('inside connection', rows);
      callback(rows);
    });
    connection.end();
  }
};
