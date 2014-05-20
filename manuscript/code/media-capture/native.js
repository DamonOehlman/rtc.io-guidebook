// use whichever prefixed version we have available
navigator.getUserMedia = navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;

function handleSuccess(stream) {
  console.log('our capture request succeeded, stream captured: ', stream);
}

function handleFailure(err) {
  console.error('We encountered an error attempting to capture media: ', err);
}

navigator.getUserMedia(
  { audio: true, video: true },  // the media capture "contraints"
  handleSuccess, // success callback
  handleFailure  // failure callback
);
