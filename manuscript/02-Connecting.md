# Creating Connections

In this section of the guidebook we will look at how we actually create connections between two browser instances.  From this point forward we will be pretty heavily focused on using the modules within the rtc.io suite.  Before we go too much futher though, let's cover off a bit of information with regards to what's involved with creating a connection.  Most of the information in this section has been distilled down from the [WebRTC specification](http://www.w3.org/TR/webrtc/), so if you feel like digging deeper, I'd recommend it.

## How Connections are Made

Prior to creating a WebRTC peer-to-peer connection to each other, browsers only have one real option for communication with the outside world and that is client-to-server interaction. So if we have two peers (A and B) we will need to use a server (C) to help establish connectivity between the peers.  This process is called signaling, and a process it falls outside the W3C spec. This is because there are so many different techniques that can be used for signaling that it is best left for application implementors to determine which solution suits them best.

In most instances, the two peers will use websocket connections via the server to communicate with each other.  In terms of the messages that need to be relayed we have two basic types of message:

1. Offer and Answer Session Descriptions

   To establish a connection between A and B, one of the peers needs to take on the role of a caller and the other as a answerer.  In the case that A is initiating the call, it would create what is called an "offer".  This offer would then be sent via the signaling channel to B, who could then create an answer in response, which would then be sent back to A.  The data contained in these messages is in a format known as [SDP]().

2. ICE candidates

   The offer and answers that are exchanged provide the peers information on where they both exist on a network.  In most cases, however, [ICE]() is needed to help the two peers actually talk to each other.  We will cover ICE, STUN and TURN on more detail later on, but for now you should know that if you have two peers that you think should be able to talk to each other (offer and answer have been successfully exchanged) but can't then your problem likely lies in the network.

## Locally connecting Peer Connections

For the moment, let's take signaling (over a network) out of the equation and get two peer connections talking to each other in a single browser window.  Let's start by having a look at what is involved with making one side of this equation work.

Displayed below is some code that demonstrates a simple process of generating an offer:

<<(code/connecting/createoffer.js)

The code below demonstrates what is required to make this happen:

<<(code/connecting/p2p-singlebrowser.js)

## Enter `rtc-quickconnect`

The `rtc-quickconnect` module exists to help get peer connections established quickly between peers in a common room.  As simple example of using quickconnect (without media or data exchange) is shown below:

> __NOTE:__ To actually see this demo work, you will either need to open the guidebook in two separate browser tabs, or complete it with friends in the context of a workshop.

<<(code/connecting/quickconnect-intro.js)

In this example we are focusing on capturing two different types of event:

- `peer:announce`

  The `peer:announce` event is triggered when a peer has joined the centralized signaling server. No peer connections have been created with the peer at this point.

- `call:started`

  This event is trigged once we have a valid `RTCPeerConnection` established with a remote peer. The event is only triggered once we have full network connectivity via the peer connection also.
