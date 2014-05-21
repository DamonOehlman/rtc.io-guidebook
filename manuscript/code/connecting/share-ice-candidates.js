var RTCPeerConnection = window.RTCPeerConnection ||
    window.webkitRTCPeerConnection ||
    window.mozRTCPeerConnection;

var peerA = new RTCPeerConnection({ iceServers: [] });
var peerB = new RTCPeerConnection({ iceServers: [] });

function sendCandidateToPeerB(candidate) {
  peerB.addIceCandidate(candidate);
}

peerA.onicecandidate = function(evt) {
  if (evt.candidate) {
    sendCandidateToPeerB(evt.candidate);
  }
  else {
    console.log('peer A has finished gathering candidates');
  }
};

