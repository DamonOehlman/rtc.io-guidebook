var quickconnect = require('rtc-quickconnect');
var mesh = require('rtc-mesh');
var uuid = require('uuid');
var roomId = uuid.v4();

// create some peers
var peerA = quickconnect('http://rtc.io/switchboard/', { room: roomId });
var peerB = quickconnect('http://rtc.io/switchboard/', { room: roomId });

// create a shared mesh between and b
var modelA = mesh(peerA);
var modelB = mesh(peerB);

// listen for changes in the model for a
modelA.on('change', function(key, value) {
  console.log('captured key "' + key + '" change, new value: ' + value);
});

// regularly change the model b value
setInterval(function() {
  modelB.set('testkey', (Math.random() * 1000) | 0);
}, 1000);
