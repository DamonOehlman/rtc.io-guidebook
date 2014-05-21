// create quickconnect, use our location for the signaling server
var quickconnect = require('rtc-quickconnect')(location.origin, {
  room: 'quickconnect-intro'
});

quickconnect.on('peer:announce', function(data) {
  console.log('there is a new peer in our room: ', data);
});

quickconnect.on('call:started', function(id, pc, data) {
  console.log('quickconnect created peer connection for peer: ' + id);
});
