# Exchanging Remote Streams

Now that we have an understanding of how to create a peer connection between peers, it's time to start building a more complete example.  From this point forward we will only be building our applications using rtc.io modules (or other browserifiable modules) in our example code. If you are wanting to dig deeper into how each of these modules work, then source code is available at the following url:

https://github.com/rtc-io

## Enter `rtc-quickconnect`

The `rtc-quickconnect` module exists to help get peer connections established quickly between peers in a common room.  As simple example of using quickconnect (without media or data exchange) is shown below:

<<(code/remote-streams/quickconnect-intro.js)
