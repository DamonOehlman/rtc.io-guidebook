# Capturing Media with WebRTC

When working with WebRTC, usually the first task you will want to attempt is capturing media from your local webcam and microphone.  This task is completed by interacting with the [Media Capture and Streams API](http://www.w3.org/TR/mediacapture-streams/) in a browser that supports it.  In most cases, people refer to this as simply `getUserMedia` (or sometimes even gUM for short).

Capturing a local stream with video and audio from your local machine is completed with the following code (note the requirement to look for vendor prefixed versions of the `getUserMedia` function):

<<(code/media-capture/native.js)

I> While running the example, you should have been prompted by the browser requesting permission to access your webcam and microphone.  This is an important security step that has been implemented into all WebRTC implementations to ensure that your camera and microphone is only used by applications with your consent.

If we pull apart the above example, we can see that the we are dealing with a quite a simple API (at least in terms of stream capture).  The most complicated part of the API is the concept of "capture constraints". These constraints (or flags) can range from very simple (as we see above) to pretty darn complicated.  We'll talk more about constraints later in the guide, but for the moment I think we can be pretty pleased with capturing that stream.

## Rendering Captured Video

Now that we have captured a stream, let's see what's involved with getting that stream to render to a local `<video>` element.  Additionally, let's take this opportunity to look at how we can use reusable modules to make our lives easier.  In this next example we will use a standalone [getusermedia](https://www.npmjs.org/package/getusermedia) module to simplify our media capture.

<<(code/media-capture/render-local.js)

You will notice that we are starting to see more differences between the way the different browsers are implementing various APIs. Let's now experiment using the [attachmediastream](https://www.npmjs.org/package/attachmediastream) module to simplify the code further:

<<(code/media-capture/attachmediastream.js)

Throughout the course of this guide we will be using this approach of using modules to make our development of WebRTC applications manageable.  While some people prefer to include a simple adapter file (see Google's [adapter.js](https://github.com/GoogleChrome/webrtc/blob/master/samples/web/js/adapter.js) for example), I would personally recommend using modules to encapsulate and reuse these pieces of functionality in your code.  It's a far more maintainable solution in the long term.

## Using `rtc-media` for Capture and Rendering

The `rtc-media` module has been designed to make capturing and rendering media streams as simple as possible, and the example below demonstrates how both can be achieved with only a few lines of code:

<<(code/media-capture/rtc-media-simple.js)

In the example above we can see how a call to `media()` is used to invoke the `getUserMedia` call.  Aditionally, when calling this function we are returned an object that use in a few different ways.  The example demonstrates both how we can use the `capture` event to handle successful capture of a media stream, the `error` event to handle capture failurs (including when the user denies access to a local resource), and also the `render` function which is a convenient all-in-one helper for rendering media into the DOM.

While in this example, we have told the `render` function that we would like it to render to the `document.body`.  In this case, where the render target is not a valid media element (`<video>`, `<audio>`, etc) a new appropriate element is created and injected into the specified container.
