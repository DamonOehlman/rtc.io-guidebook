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

function sendAnswerToA(desc) {
  return function() {
    peerA.setRemoteDescription(
      desc,
      function() {
        console.log('signaling completed between peers')
      },
      handleFailure('setting remote description of peer A')
    );
  };
}

function sendOfferToB(desc) {
  function createAnswer() {
    peerB.createAnswer(
      function(desc) {
        console.log('peer B successfully created answer');
        peerB.setLocalDescription(
          desc,
          sendAnswerToA(desc),
          handleFailure('setting local description of peer B')
        );
      },
      handleFailure('creating answer')
    );
  }

  return function() {
    peerB.setRemoteDescription(
      desc,
      createAnswer,
      handleFailure('setting remote description of peer B')
    );
  }
}

peerA.createOffer(
  function(desc) {
    console.log('peer A successfully created offer');
    peerA.setLocalDescription(
      desc,
      sendOfferToB(desc),
      handleFailure('setting local description of peer A')
    );
  },

  handleFailure('creating offer')
);
