---
title: Identify Joysticks with SFML
author: Sean Monahan
template: post.jade
description: A quick guide to using the new APIs on the SFML Joystick class.
date: 2014-03-05
---

## Identify Joysticks with SFML

This post will discuss using the new API on the `sf::Joystick` class that enables you to uniquely identify a connected joystick. This is exicting as it allows you to detect specific controllers and provide sane defaults for button mappings. If that doesn't mean anything to you I discuss the problem more in [this post](/blog/sfml-gamepad-test).

Before we begin, as of this writing the [patch that adds joystick identification support](https://github.com/LaurentGomila/SFML/pull/528) has been merged into SFML master but a new version of SFML has yet to be released. This means that you'll need to clone the [SFML repo](https://github.com/LaurentGomila/SFML) and compile from source to enjoy this feature. Don't worry, it's not hard to compile the source and there's even an [official tutorial](http://sfml-dev.org/tutorials/2.1/compile-with-cmake.php) that explains how to do it. This feature should be in the next official SFML release, which I expect will be version 2.2.

The new API essentially adds two things: a method `sf::Joystick::getIdentification(unsigned int index)` and a struct `sf::Joystick::Identification`. Yes, this means it's super easy to use!

`sf::Joystick::getIdentification()` works like all the other SFML Joystick functions. It's a static method so all you need to do is provide the index of the joystick you are interested in. For our example we'll say you want to know about index 2.

    // Get the ID for joystick at index 2
    sf::Joystick::Identification id = sf::Joystick::getIdentification(2);

Now you have a `sf::Joystick::Identification` struct, but what to do with it? `sf::Joystick::Identification` has three members:

1. `name`: a `sf::String` representing the name of the joystick according to the driver.
2. `vendorId`: the unique ID of the joystick's vendor (the company that made the thing). This is an `unsigned int`.
3. `productId`: the unique ID of the product (the joystick). This is an `unsigned int`.

The `name` field is nice to have because it gives a, in theory, human-friendly name to the joystick. In practice names are often long-winded, Microsoftian affairs like "Controller (Xbox 360 Wireless Receiver for Windows)" or short, sweet and totally useless like plain ole "Controller". __Don't use `name` to actually identify the joystick__. You might want to show the name to your users so they know what is the what but the `name` field is unreliable as it's set by the driver.

The `vendorId` is the unique [USB Vendor ID](http://www.usb.org/developers/vendor/) assigned to each company that develops USB products. This value is read from the hardware, making it a reliable way to ID a joystick across platforms. SFML stores this value as an `unsigned int`. Similar to `vendorId` the `productId` is a unique `unsigned int` value that is read from the hardware. Its value is consistent across platforms.

The best way to ID a joystick in SFML is to use the combination of `vendorId` and `productId`. Just think of `vendorId` as a namespace for `productId`: all product IDs within a give vendor ID namespace will be unique. Different vendors might use the same product IDs but they are guaranteed to have different vendor IDs so no collision occurs.

To see this in action check out my [testbed](/blog/sfml-joystick-testbed) application, specifically starting [here](https://github.com/NoobsArePeople2/SFMLJoystickTestbed/blob/master/src/View.cpp#L41).