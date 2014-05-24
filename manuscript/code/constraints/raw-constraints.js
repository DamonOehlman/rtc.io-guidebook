var media = require('rtc-media');
var constraints = {
  audio: true,
  video: {
    mandatory: {
      minFrameRate: 15,
      maxFrameRate: 25,

      minWidth: 1280,
      minHeight: 720,
      maxWidth: 1280,
      maxHeight: 720
    },

    optional: []
  }
};

media({ constraints: constraints })
  .on('error', function(err) {
    console.error('Could not capture media: ', err);
  })
  .render(document.body);
