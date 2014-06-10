---
title: Splat, Days Three and Four
author: Sean Monahan
template: post.jade
description: My first weekend working on Splat
date: 2014-06-09
---

## Splat, Days Three and Four

My weekend was unusually busy so I didn't spend much time working on Splat. Mostly I cleaned up some of my refactoring to get the app into a good place to start up again this week. Up to this point I've been avoiding one of Angular's best features: ease of testing. I knew my first few drafts of Splat were going to be nasty messes and wanted the freedom to be able to refator mercilessly without also having to refactor a bunch of tests. Now I feel like my code has settled into a nice situation so it's time to get testing!

In preparation I've been brushing up on my unit testing, specifically reading about how to best create unit tests for game. I think I get to sidestep the "unit testing games" question as Splat functions more like an event driven webapp than an action game with a tight loop so that's nice. I've never done unit testing for a game &mdash; most games I've made action heavy and running in a traditional game loop (making them hard to test) &dash; and I'm hoping having a solid testing suite will let me open things up and iterate more freely with design changes. We'll see how it goes in a couple days.