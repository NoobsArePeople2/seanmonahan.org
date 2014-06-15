---
title: Splat, Day Six
author: Sean Monahan
template: post.jade
description: Karma!!!
date: 2014-06-12
---

## Splat, Day Six: Karma!!!

_Sigh_...man, unit testing in Angular was not as smooth a process as I expected. But I do have nice coverage for all my Angular code as of about five minutes ago and I must say, it's a nice feeling. A lot of my frustration with testing this project came from Karma, the bit that runs my Jasmine tests.

Karma, like Grunt, is all about its config file and like with Grunt, this is something I'm not a huge fan of. Don't get me wrong, Grunt is a wonderful tool but setting up a config file for it can be laborious and not particularly rewarding (the fact that Yeoman gave me a fully functional Gruntfile was a big plus). Karma is much the same and while it might _look_ like everything is configured correctly it actually isn't. And man does this suck, especially when you're working on a side project late and night and just want to get your tests working, man. It was frustrating enough that I seriously was considering skipping the unit tests for my directives. Then I decided that was a dumb idea and actually got Karma configured correctly and my tests started working.

Now that I have my tests in place I'm feeling good and confident Splat will working as expected and ready to get back to implementing the game. So far my Angular experience is coming along nicely with testing being the only spot of true frustration along the way. I'd love to see more in-depth tutorials and articles on testing Angular directives and setting up Karma to play nicely with them. Maybe I'll write one when I finish Splat.