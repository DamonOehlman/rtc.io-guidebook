var RTCPeerConnection = window.RTCPeerConnection ||
    window.webkitRTCPeerConnection ||
    window.mozRTCPeerConnection;

var peerA = new RTCPeerConnection({ iceServers: [] });
var peerB = new RTCPeerConnection({ iceServers: [] });

function handleFailure(step) {
  return function(err) {
    console.error('error ' + step + ': ', err);
  }
}

peerA.createOffer(
  function(desc) {
    console.log('successfully created offer, we now have some sdp');
    console.log(desc.sdp);
  },

  handleFailure('creating offer')
);
