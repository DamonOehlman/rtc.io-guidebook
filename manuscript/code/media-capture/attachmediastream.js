var getUserMedia = require('getusermedia');
var attachMediaStream = require('attachmediastream');

getUserMedia({ video: true, audio: true }, function(err, stream) {
  var video;

  if (err) {
    return console.error('captured failed: ', err);
  }

  // create a new video element
  video = document.createElement('video');

  // attach the media stream and mute so we don't get feedback
  attachMediaStream(stream, video, {
    muted: true
  });

  // attach the video element to the document body
  document.body.appendChild(video);
});
