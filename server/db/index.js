var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = {
  databaseConnection: function(queryString, callback) {
    var connection = mysql.createConnection({
      user: 'root',
      database: 'chat'
    });
    connection.connect();
    connection.query(queryString, function(error, rows) {
      if (error) {
        return error;
      }
      console.log(rows);
      callback(rows);
    });
    connection.end();
  }
};
