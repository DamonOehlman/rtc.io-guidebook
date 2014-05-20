# Capturing Media with WebRTC

When working with WebRTC, usually the first task you will want to attempt is capturing media from your local webcam and microphone.  This task is completed by interacting with the [Media Capture and Streams API](http://www.w3.org/TR/mediacapture-streams/) in a browser that supports it.  In most cases, people refer to this as simply `getUserMedia` (or sometimes even gUM for short).

Not taking vendor prefixes into account (i.e. `webkit`, `moz`, etc) code to capture a local stream with video and audio from your local machine is completed with the following code:

<<(code/media-capture/native.js)

While running the example, you should have been prompted by the browser requesting permission to access your webcam and microphone.  This is an important security step that has been implemented into all WebRTC implementations to ensure that your camera and microphone is only used by applications with your consent.

If we pull apart the above example, we can see that the we are dealing with a quite a simple API (at least in terms of stream capture).  The most complicated part of the API is the concept of "capture constraints". These constraints (or flags) can range from very simple (as we see above) to pretty darn complicated.  We'll talk more about constraints later in the guide, but for the moment I think we can be pretty pleased with capturing that stream.

<<(code/rtc-media/simple-capture.js)
