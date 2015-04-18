var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db');



module.exports = {
  messages: {
    get: function (req, res) {
      console.log("ENTERED message GET HANDLER " + JSON.stringify(req.body));
      models.messages.get(function(err, results){
        if (err) {
          res.status(500).send("we fucked up");
        } else {
          res.status(200).send(JSON.stringify(results));
        }
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("WE GOT TO THE POST "+ JSON.stringify(req.body));

      models.messages.post(req.body, function(err, results){
        if (err) {
          res.status(500).send("sorry");
        } else {
          console.log("RBM: " + JSON.stringify(req.body.message));
          res.status(201).send([{text: JSON.stringify(req.body.message)}]);
        }
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log("ENTERED USER GET HANDLER " + JSON.stringify(req.body));
      models.users.get(function(err, results){
        if (err) {
          res.status(500).send("we fucked up");
        } else {
          res.status(200).send(JSON.stringify(results));
        }
      })
    },
    post: function (req, res) {
        console.log("USER POST "+ JSON.stringify(req.body));

        models.users.post(req.body, function(err, results){
          if (err) {
            res.status(500).send("sorry");
          } else {
            res.status(201).send();
          }
        })
      } // a function which handles posting a message to the database
    }
};
