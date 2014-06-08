---
title: Splat, Day Two
author: Sean Monahan
template: post.jade
description: My second day of work on Splat.
date: 2014-06-06
---

## Splat, Day Two

So I got started in earnest with Splat and things rapidly degenerated into a mess. At this point I've read a bunch of intro material on Angular and done a few tutorials and I know I'm not doing things the "Angular Way". Time to go back to Code School.

Code School's <a href="https://www.codeschool.com/courses/shaping-up-with-angular-js" target="_blank">Angular Course</a> breaks things down and really helps me solidify my mental diagram of Angular. With my new, better, more Angular Way of thinking about things I get to refactoring. Pretty quickly I've got board, player and parachute modeled up with players moving around the board via mouse clicks. This code is still a total mess but _something_ is happening now so that's nice. Somehow little victories like this really give me new wind to do more work and I do a ton more refactoring and some more in-depth research into Angular's views on separating concerns.

Before this latest refactor all my directives, models and controllers lived inside a single module file. This worked as a starting point as it let me focus on getting something up and running before worrying over all the details of keeping my code clean but once I had things up and running the mess became too much. Now all directives are separate from my controllers which are separate from my models which are...eh...you get the idea, my project is much cleaner and easier to understand. The truly amazing thing about this is how easy all this refactoring was. Sure, I could steal all the credit and just say that even my crummy throwaway code is elegantly beautiful but the truth is Angular has this almost magical ability to Just Work. Right now I'm really impressed with what the Angular Team has been able to build.