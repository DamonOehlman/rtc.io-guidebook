var media = require('rtc-media');

media()
  .once('capture', function(stream) {
    console.log('look I caught a stream: ', stream);
  })
  .render(document.body);
