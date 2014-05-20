var getUserMedia = require('getusermedia');

getUserMedia({ video: true, audio: true }, function(err, stream) {
  var video;

  if (err) {
    return console.error('captured failed: ', err);
  }

  // create a new video element
  video = document.createElement('video');

  // if we are in a mozilla environment, use the mozSrcObject
  if (typeof video.mozSrcObject != 'undefined') {
    video.mozSourceObject = stream;
  }
  else {
    video.src = URL.createObjectURL(stream);
  }

  // mute the video element and play the video
  video.setAttribute('muted', 'muted');
  video.play();

  // attach the video element to the document body
  document.body.appendChild(video);
});
