var media = require('rtc-media');

media()
  .on('capture', function(stream) {
    console.log('look I caught a stream: ', stream);
  })
  .on('error', function(err) {
    console.error('Error capturing local media: ', err);
  })
  .render(document.body);
