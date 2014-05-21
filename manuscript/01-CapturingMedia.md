# Capturing Media with WebRTC

When working with WebRTC, usually the first task you will want to attempt is capturing media from your local webcam and microphone.  This task is completed by interacting with the [Media Capture and Streams API](http://www.w3.org/TR/mediacapture-streams/) in a browser that supports it.  In most cases, people refer to this as simply `getUserMedia` (or sometimes even gUM for short).

Capturing a local stream with video and audio from your local machine is completed with the following code (note the requirement to look for vendor prefixed versions of the `getUserMedia` function):

<<(code/media-capture/native.js)

A> __NOTE:__ While running the example, you should have been prompted by the browser requesting permission to access your webcam and microphone.  This is an important security step that has been implemented into all WebRTC implementations to ensure that your camera and microphone is only used by applications with your consent.

If we pull apart the above example, we can see that the we are dealing with a quite a simple API (at least in terms of stream capture).  The most complicated part of the API is the concept of "capture constraints". These constraints (or flags) can range from very simple (as we see above) to pretty darn complicated.  We'll talk more about constraints later in the guide, but for the moment I think we can be pretty pleased with capturing that stream.

## Rendering Captured Video

Now that we have captured a stream, let's see what's involved with getting that stream to render to a local `<video>` element.  Additionally, let's take this opportunity to look at how we can use reusable modules to make our lives easier.  In this next example we will use a standalone [getusermedia](https://www.npmjs.org/package/getusermedia) module to simplify our media capture.

<<(code/media-capture/render-local.js)

You will notice that we are starting to see more differences between the way the different browsers are implementing various APIs. Let's now experiment using the [attachmediastream](https://www.npmjs.org/package/attachmediastream) module to simplify the code further:

<<(code/media-capture/attachmediastream.js)

Throughout the course of this guide we will be using this approach of using modules to make our development of WebRTC applications manageable.  While some people prefer to include a simple adapter file (see Google's [adapter.js](https://github.com/GoogleChrome/webrtc/blob/master/samples/web/js/adapter.js) for example), I would personally recommend using modules to encapsulate and reuse these pieces of functionality in your code.  It's a far more maintainable solution in the long term.

## Using `rtc-media` for Capture and Rendering

<<(code/rtc-media/simple-capture.js)
