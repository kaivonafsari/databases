var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db');
var qs = require('querystring');


module.exports = {
  messages: {
    get: function (req, res) {
      console.log("GET handler called")
      db.connection.query('SELECT * FROM `messages`',function(err, results) {
        console.log("SELECT DB query ran.")
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(results));

      })

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      request.body
      // console.log("Messages POST handler called")
      // var body = '';
      // req.on('data', function (data) {
      //     body += data;

      // });
      // req.on('end', function () {
      //     var post = JSON.parse(body);
      //     db.connection.query({
      //       sql: 'INSERT INTO messages (username,roomname,message) values (?,?,?)',
      //       timeout: 40000, // 40s
      //       values: [post.username,post.roomname,post.message]
      //     }, function (error, results, fields) {
      //       console.log("INSERT DB query ran.");
      //      if (error) {
      //        res.writeHead(500,null);
      //        res.end();
      //      } else {
      //       console.log("Ending Messages POST response.")
      //        res.writeHead(201,null);
      //        res.end();
      //      }
      //     });

      //     // use post['blah'], etc.
      // });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log("GET handler called")
      db.connection.query('SELECT * FROM `users`',function(err, results) {
        console.log("SELECT DB query ran.")
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(results));

      })

    },
    post: function (req, res) {
      console.log("Users POST handler called")
      var body = '';
      req.on('data', function (data) {
          body += data;
          console.log("Recieved data!");
      });
      req.on('end', function () {
        console.log("POST data collection finished.")
          var post = JSON.parse(body);
          db.connection.query({
            sql: 'INSERT INTO users (username) values (?)',
            timeout: 40000, // 40s
            values: [post.username]
          }, function (error, results, fields) {
            console.log("INSERT DB query ran.");
           if (error) {
             res.writeHead(500,null);
             res.end();
           } else {
            console.log("Ending Users POST response.")
             res.writeHead(201,null);
             res.end();
           }
          });

          // use post['blah'], etc.
      });
    }
  }
};

