var media = require('rtc-media');
var config = require('rtc-captureconfig');
var source = config('camera min:1280x720 max:1280x720 min:15fps max:25fps');

media({ constraints: source.toConstraints() })
  .on('error', function(err) {
    console.error('Could not capture media: ', err);
  })
  .render(document.body);

