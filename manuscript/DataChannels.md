# Using WebRTC Data Channels

Another exciting part of WebRTC is the availability of peer-to-peer data communications. These communications are enabled by what is called a "data channel", and is represented by the [`RTCDataChannel`](http://www.w3.org/TR/webrtc/#rtcdatachannel) interface in the browser.  Support for data channels has been baked into `rtc-quickconnect` so let's take a look at what an example looks like:

<<(code/datachannels/quickconnect-local.js)

The example above is fairly contrived, but hopefully does demonstrate how `rtc-quickconnect` simplifies the process of working with WebRTC data channels.  If you were to set these channels up yourself then you need to deal with some asymmetry in the way peer connections negotiate a data channel.  As this guide is focused on rtc.io we don't cover that here, but there is an [example in the WebRTC spec](http://www.w3.org/TR/webrtc/#peer-to-peer-data-example) that does provide more information.

## Combining "Node Streams" and Data Channels

On their own data channels are a lot of fun to play with, but combined with node streams and you get something pretty amazing.  As data channels are capable of delivering text and binary data you can transfer pretty much anything, in a very efficient way.

For instance, let's take a look at the following example:

<<(code/datachannels/dcstream-imagetransfer.js)

Over the evolution of the rtc.io, a pattern started to emerge where you could create a function that prepared a quickconnect instance in a particular way.  There are number of examples of these plugins in the [rtc-io github repositories](https://github.com/rtc-io/).

Let's take a look at a plugin the shares state across WebRTC data channels using [scuttlebutt](https://github.com/dominictarr/scuttlebutt) through it's streaming interface.  This module is called [`rtc-mesh`](https://github.com/rtc-io/rtc-mesh) and a simple example of it's use is shown below:

<<(code/datachannels/mesh.js)
