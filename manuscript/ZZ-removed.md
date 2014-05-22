<<(code/connecting/quickconnect-intro.js)

T> To actually see this demo work, you will either need to open the guidebook in two separate browser tabs, or complete it with friends in the context of a workshop.

In this example we are focusing on capturing two different types of event:

- `peer:announce`

  The `peer:announce` event is triggered when a peer has joined the centralized signaling server. No peer connections have been created with the peer at this point.

- `call:started`

  This event is trigged once we have a valid `RTCPeerConnection` established with a remote peer. The event is only triggered once we have full network connectivity via the peer connection also.
