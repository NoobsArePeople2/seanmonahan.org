---
title: Walk in Our Shoes
author: Sean Monahan
template: post.jade
description: Discover mental health and how to care for youself and others.
date: 2014-05-12
header: header.png
headerCopy: Walk in Our Shoes
---

<a href="http://walkinourshoes.org/" target="_blank">Walk in Our Shoes</a> is a site I worked on at Typeoneerror. Aimed at 9-13 year olds, Walk in Our Shoes teaches kids (and adults) about mental health challenges and how to care for yourself and others through stories, interactive activities and quick facts about mental health.

I developed <a href="http://walkinourshoes.org/our-stories/laura" target="_blank">Laura's Story</a>. I selected the tools to use and created all the animations from our source artwork using Skrollr. I used SoundJS to leverage HTML5's audio playback capabilities with a Flash fallback for older browsers. An alternate mobile-friendly version was implemented with jQuery as the full-blown animations were a tad much for mobile.

I built the Shoe Creator, a mini-app on the site for creating a graphic with shoe images and text. On the front end, the usual suspects &mdash; HTML, CSS and Javascript &mdash; were employed. On the back end PHP merged the user's selected images into a single PNG and stored it in a bucket on Amazon S3. Images were given keys based on their content, allowing us to skip the PHP image creation step if duplicate images were created.

I also implemented the parallax text stories (Emma's Story and Zoey's Story), took on various other odds and ends, and maintained the site post-launch.

<a href="http://walkinourshoes.org/" target="_blank">Visit the Site</a>