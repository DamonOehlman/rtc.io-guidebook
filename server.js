#!/usr/bin/env node
var guidebook = require('guidebook');
var port = parseInt(process.env.NODE_PORT, 10) || 3000;

// fail fast (quit process but log error)
require('failfast')(__dirname);

guidebook({ basePath: __dirname }, function(err, server, cdn) {
  var switchboard;

  if (err) {
    return console.error('could not create guidebook: ', err);
  }

  // start the server
  server.listen(port, function(err) {
    if (err) {
      return console.error('Could not bind to port: ' + port, err);
    }

    console.log('running rtc-guidebook at http://localhost:' + port + '/');
  });
});
