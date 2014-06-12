---
title: Splat, Day Five
author: Sean Monahan
template: post.jade
description: Testing, testing, testing!
date: 2014-06-09
---

## Splat, Day Five: Testing

Phew! Finally starting to get testing into Splat and usually I'm feeling good when this starts to happen because it means my app is getting into shape, with Angular though it's been a bit of a process. There are a quite a few things involved in an Angular unit test: Karma, Jasmine, Angular and my code. Each of these has its own peculiarites and while they ultimately come together nicely I've spent quite a bit of my Splat dev time today hunting down testing related issues.

Testing is one of those things that is just not sexy and that comes through in the docs for it. Angular makes a point of being easy to test and pushing testing to the foreground but its examples make testing _look_ easy (well, easier than it is, it's really not that hard) by lofting out softball examples. When you find yourself trying to test a controller that has some services you wrote as dependencies and things start going sideways you'll find yourself adrift in a sea of oh-so-similar-to-your-error-message Stack Overflow posts. This is not a fun place to be.

Most of my issues centered around configuration details in Karma: the order in which files are included is important! There's also a missing comma in the Karma configuration file that Yeoman generates. Mocking is another topic that is discussed in tutorials but really could stand to have some more emphasis placed on it.

Having seen first hand what adding tests can do for the reliability of an app that previously lacked them I persevered through all the arcane messages and now have two of my controllers tested. I was hoping to get everything covered but it looks like that'll have to wait for tomorrow.