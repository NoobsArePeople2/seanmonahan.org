---
title: Framed
author: Sean Monahan
template: work.jade
description: An Actionscript library for exporting MovieClips and the Flash Stage to PNG sequences for games and other applications.
date: 2013-05-01
---

### Framed

#### *An Actionscript library for exporting MovieClips and the Flash Stage to PNG sequences for games and other applications.*

<br/>
Flash may have had it's day for creating web content but it's still an excellent tool for drawing and creating animations. I'm using it to draw and color the animations for a little game project I'm working on and I need a good way to export all of the frames of my animations to PNGs so I can use them in my game. I want this process to mesh nicely into my workflow and not require a lot of thought. It should need only a one-time, minimal setup and then a simple button press after that.

Out-of-the-box Flash has some limited functionality in this area. Using File > Export Movie... will open a dialog with an option to export the Flash movie as a PNG sequence. This works but it has two issues that make it a non-starter. First it is an entirely manual process making it a workflow-disrupting pain. The second is that this method will export the entire stage. I like to work with a large stage area so I have room to scribble in the margins as I go. My actual animations occupy relatively little area on the stage. Using the ootb method of PNG export means I'll need to crop my frames after exporting. So, yeah, Flash can export a PNG sequence but it's really not useful for an effective workflow.

A cursory search of Flash animation to PNG exporters will quickly yield links to [Grapefrukt Exporter](https://github.com/grapefrukt/grapefrukt-export). This is a really great library and if it works for you use it rather than Framed. My animations are done like traditional pencil and paper over a lightbox animation: I draw each and every frame. From what I gather this is pretty atypical in the Flash world and seems to be incompatible with the assumptions Grapefrukt Exporter makes about how your Flash animations will be set up.

Sadly I could not take advantage of Grapefrukt Exporter, instead I went ahead and put together Framed. Framed is a simple SWC library that you add to a Flash project to enable MovieClip- or Stage-to-PNG sequence export. Once Framed is added to a project 3 or 4 (depends on the export method you use) lines of Actionscript and a few setup steps will have you exporting PNG sequences as quickly as you can hit "Test Movie".

For complete instructions on setting up and using Framed checkout the [repo on Github](https://github.com/NoobsArePeople2/Framed). If you run into a bug please [open a ticket](https://github.com/NoobsArePeople2/Framed/issues) on Github and I'll do my best to resolve it. If you have any questions about Framed or are using Framed in a project I'd love to hear about it! [Send me an email](mailto:hello@seanmonahan.org?subject=Framed) and tell me about your project.