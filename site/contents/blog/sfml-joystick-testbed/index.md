---
title: SFML Joystick Testbed
author: Sean Monahan
template: post.jade
description: A testbed application for Joysticks in SFML. Useful for mapping controller indexes to physical buttons.
date: 2014-05-09
---

## SFML Joystick Testbed

### *A testbed application for joysticks in SFML*

SFML _Joystick_ Testbed is an improvement on my previous joystick-related SFML app, [SFML Gamepad Test](/blog/sfml-gamepad-test). Since the original app was written I've patched in full support for grabbing a joystick's name, vendor ID and product ID to SFML (which you can read about [here](/blog/sfml-joystick-identification) and [here](https://github.com/LaurentGomila/SFML/pull/528) and [here](http://en.sfml-dev.org/forums/index.php?topic=14032.0)). This works on Mac, Windows and Linux allowing joysticks to be more easily used in SFML.

The updated testbed application displays this new joystick information that SFML exposes and it does so in a much nicer way than before. Previously you just got an unfriendly textual list of buttons and axes. Now you get some (low rent) graphics, larger fonts and a much more readable interface. Previously you could only see four joysticks in the app, now you can cycle through all the joysticks attached to your computer. It really is a much nicer app.

Download it from Github [here](https://github.com/NoobsArePeople2/SFMLJoystickTestbed).