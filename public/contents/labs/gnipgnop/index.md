---
title: GnipGnop
author: Sean Monahan
template: work.jade
description: An experimental browser-based, multi-device, networked multiplayer game written in Javascript.
---

### GnipGnop

#### *GnipGnop is an experiment in creating a browser-based, multi-device, networked multiplayer game that runs off a single code base on client and server.*

<br/>
*Phew!* That was a mouthful! What this means it that GnipGnop is written entirely in Javascript so the same code runs in a web browser (the client) and in [Node.js](http://nodejs.org) (the server). The only requirements are Node.js to run a server and a web browser that supports [Canvas](http://caniuse.com/#search=canvas) and [Websockets](http://caniuse.com/#search=websocket) which is pretty much any recent browser.

Like any experiment GnipGnop started with a hypothesis: that HTML5 was mature enough to make a networked multiplayer game that runs on traditional PCs, tablets and smartphones via the browser, all with the same Javascript code base. Implementing this hypothesis would allow me to do a few things along the way:

* Sharpen my Javascript skills and learn modern JS practices
* Test the strengths, weaknesses and plain limitations of HTML5 for game development
* Familiarize myself with Node.js
* Create my first networked multiplayer game
* Build a foundation for future HTML5 games

Put all of that together and you end up with a pretty tall order. How did it end up? Let's start by taking a look at some videos:

#### Nexus S vs iPad3

<iframe class="youtube-embed" src="http://www.youtube.com/embed/AWLaD6l9Y1Y" frameborder="0" allowfullscreen></iframe>

#### iPad3 vs Windows 8

<iframe class="youtube-embed" src="http://www.youtube.com/embed/c-V03YYhq9s" frameborder="0" allowfullscreen></iframe>

#### Chrome vs Firefox on Windows 8

<iframe class="youtube-embed" src="http://www.youtube.com/embed/ttR3ciTY2Wk" frameborder="0" allowfullscreen></iframe>

If you want to see it firsthand clone the repo on [Github](https://github.com/NoobsArePeople2/GnipGnop), follow these [instructions](https://github.com/NoobsArePeople2/GnipGnop#installation) and grab a friend.

<hr/>

After watching the videos above or trying GnipGnop out for yourself you can see it's certainly possible to make an HTML5 game for desktop and mobile from a single code base and have that same code run in Node.js and that is awwwwwesome. With my experiment a success overall I'll detail some of the things I learned along the way.

#### RequireJS and AMD Make Life Easy

GnipGnop uses [AMD](http://en.wikipedia.org/wiki/Asynchronous_module_definition) and [Require.js](http://requirejs.org/) to break up the game into discrete parts making the project easier to grok. In addition to working in the browser RequireJS has a Node module that allows GnipGnop to use the exact same module syntax in Node and the browser. Win!

#### CreateJS

Flash often takes a beating among web developers but I've always found its API to be clean and simple. CreateJS essentially brings this API to Javascript which makes the transition from Flash to HTML5 a breeze for Flash/AS3 devs like myself.

#### Performance

There is an absolutely massive performance gulf between desktop and mobile. For GnipGnop my primary testing was done on a new Windows 8 box and things ran amazingly well at a solid 60fps (of course). When I got around to testing on my phone and iPad the game struggled to maintain 15fps. I was able to get the frame rate up to a solid 60 on iPad and a respectable 25~30 on my phone (the Nexus S is two plus years old at this point) by doing some checks along the lines of __if $mobile then disableExtraneousEffects()__. In the future any HTML5 project I do that needs to run on both mobile and desktop will be "mobile first" simply because mobile is most likely to put technical constraints on the project.

#### WebSockets and Real-Time Networked Multiplayer

Setting up and using WebSockets was surprisingly easy. This being my first networked multiplayer game, getting something up and running quickly and having a friend hundreds of miles away control an object on my iPad was thrilling. There's just something about playing a game with other people that a single player game can never match.

Of course, real-time networked multiplayer isn't all that easy. Basic synchronizing of game state between all players and the server is tricky. Then there is [lag compensation](https://developer.valvesoftware.com/wiki/Latency_Compensating_Methods_in_Client/Server_In-game_Protocol_Design_and_Optimization). Essentially lag compensation is a mechanism to hide lag from players and maintain the appearance that a networked game is running smoothly at all times despite the fact that under the hood packets are getting dropped or taking forever to arrive. It's a fascinating swirl of player psychology, game design and technical detail.

The lag compensation aspects of GnipGnop are rudimentary. You can play the game so they work as a proof of concept but would need to be improved for an actual product.

#### GnipGnop as a Foundation for Future HTML5 Games

I'm mostly happy with the setup I built for GnipGnop. The core is an entity-component system based on this [Game Dev StackExchange post](http://gamedev.stackexchange.com/questions/31473/role-of-systems-in-entity-systems-architecture) whose goal is to decouple different aspects of the game. I've found this to be a good system that really shines as the complexity of a game increases. Since I finished GnipGnop [Phaser](https://github.com/photonstorm/phaser) has popped up so I'm not sure I'd continue to develop my own HMTL5 framework.

#### HTML5 Games are Pretty Much Here

The current gold standard for web games is Flash. It has solid, mature tools and runs just about anywhere. On desktop HTML5 games can already match the quality and performance of Flash. The tools aren't as good as in the Flash world but they'’'re getting there. The biggest issue HTML5 faces on the desktop is ubiquity and evolving standards. It's new, features are still being standardized and implemented, and not all browsers support the HTML5 features necessary to make a game. Fortunately these are all solvable problems that are being worked on.

Personally I don't have much of a particular attachment to any one technology I'm just glad things exist that allow me to make games easily accessible to players making the maturation of HTML5 a good thing in my book.