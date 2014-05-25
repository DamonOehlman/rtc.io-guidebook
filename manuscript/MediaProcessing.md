# Image Processing and Analysis

While not directly related to WebRTC, this is a common task that people like to use the media capture spec for.  Using the media streams captured by the browser you are able to analyse and/or process the image data on a frame by frame basis for captured video.  The example below demonstrates how we can use the `rtc-videoproc` module to capture video data, post-process it and then render it to a canvas element:

<<(code/processing/grayscale-programmatic.js)

This can be further simplified by using a module that encapsulates the filter:

<<(code/processing/grayscale.js)
