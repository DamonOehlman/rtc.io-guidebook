# Using Media Capture Constraints

Capture constraints are used to control what a camera should actually capture.  Through specifying particular constraints you can ask a compatible camera to capture HD (or even Full HD) resolution, or do other things such as limit the framerate at which it captures images.  An example of using media contraints to capture what is captured is displayed below:

<<(code/constraints/raw-constraints.js)

While it's easy enough to understand what is going on in the above example, if you are anything like me you might be wondering if a similar result can be achieved with less code.

It was for this reason that the [`rtc-captureconfig`](https://github.com/rtc-io/rtc-captureconfig) module was written, and the previous example rewritten using it is shown below:

<<(code/constraints/capture-config.js)

## Targeted Device Capture
