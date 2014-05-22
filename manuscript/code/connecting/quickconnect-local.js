var quickconnect = require('rtc-quickconnect');
var uuid = require('uuid');
var roomId = uuid.v4();

// create some peers
var peerA = quickconnect(location.origin, { room: roomId });
var peerB = quickconnect(location.origin, { room: roomId });

peerA.on('call:started', function(id, pc) {
  console.log('peer A started a call with peer: ' + id);
});

peerB.on('call:started', function(id, pc) {
  console.log('peer B started a call with peer: ' + id);
});

console.log('peer A created with id: ' + peerA.id);
console.log('peer B created with id: ' + peerB.id);
