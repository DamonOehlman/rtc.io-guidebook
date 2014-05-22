var quickconnect = require('rtc-quickconnect');
var uuid = require('uuid');
var roomId = uuid.v4();

// create some peers
var peerA = quickconnect(location.origin, { room: roomId });
var peerB = quickconnect(location.origin, { room: roomId });

// tell the peers that we want data channels
peerA.createDataChannel('test');
peerB.createDataChannel('test');

peerA.on('channel:opened:test', function(id, dc) {
  console.log('peer A has opened a data channel for comms with peer: ' + id);

  dc.onmessage = function(evt) {
    console.log('peer A received a message: ' + evt.data);
  };

  dc.send('hello');
});

peerB.on('channel:opened:test', function(id, dc) {
  console.log('peer B has opened a data channel for comms with peer: ' + id);

  dc.onmessage = function(evt) {
    console.log('peer B received a message: ' + evt.data);
  };

  dc.send('hi');
});

console.log('peer A created with id: ' + peerA.id);
console.log('peer B created with id: ' + peerB.id);
