var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT * FROM `messages`',function(err, results) {
        callback(err, results);

      })
    }, // a function which produces all the messages
    post: function (data, callback) {

      db.connection.query({
              sql: 'INSERT INTO messages (username,roomname,message) values (?,?,?)',
              timeout: 4000, // 4s
              values: [data.username,data.roomname,data.message]
            }, function (err, results, fields) {
              callback(err,results);
            });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.connection.query('SELECT * FROM `users`',function(err, results) {
        callback(err, results);

      })
    },
    post: function (data,callback) {
      db.connection.query({
              sql: 'INSERT INTO users (username) values (?)',
              timeout: 4000, // 4s
              values: [data.username]
            }, function (err, results, fields) {
              callback(err,results);
            });
    }
  }
};

