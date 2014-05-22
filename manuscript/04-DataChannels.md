# Using WebRTC Data Channels

Another exciting part of WebRTC is the availability of peer-to-peer data communications. These communications are enabled by what is called a "data channel", and is represented by the [`RTCDataChannel` ](http://www.w3.org/TR/webrtc/#rtcdatachannel) interface in the browser.  Support for data channels has been baked into `rtc-quickconnect` so let's take a look at what an example looks like:

<<(code/datachannels/quickconnect-local.js)

Using data channels with `rtc-quickconnect` is designed to be as easy as working with media streams (it's probably a bit easier actually), but there are some tricks if you want to implement this yourself with the raw browser API.  At this stage, this guide does not contain that information.
