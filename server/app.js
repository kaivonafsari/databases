var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

// Logging and parsing
app.use(morgan('dev')); // logs things to stdout (the console)
app.use(parser.json()); // (tries to?) parse the body of the request as JSON

// Set up our routes
app.use("/classes", router); // sends matching requests to routes.js

// Serve the client files
app.use(express.static(__dirname + "/../client")); // serves ../client files on /

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}

