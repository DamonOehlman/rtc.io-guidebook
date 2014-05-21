var RTCPeerConnection = window.RTCPeerConnection ||
    window.webkitRTCPeerConnection ||
    window.mozRTCPeerConnection;

var pc = new RTCPeerConnection({ iceServers: [] });

function handleFailure(err) {
  console.error('An error was encountered: ', err);
}

pc.createOffer(
  function(desc) {
    console.log('successfully created offer, we now have some sdp');
    console.log(desc.sdp);

    // we create an offer so set the local description
    pc.setLocalDescription(
      desc,
      function() {
        console.log('the peers local description has been set')
      },
      handleFailure
     );
  },

  handleFailure
);
