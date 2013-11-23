$(document).ready(function () {
    var navElements = [];
    var current = null;
    var clicked = false;

    var menuVisible = false;
    function showMenu() {
    $('#mobile-menu').addClass('visible');
        menuVisible = true;
    }

    function hideMenu() {
        $('#mobile-menu').removeClass('visible');
        menuVisible = false;
    }

    function toggleMenu() {
        if (menuVisible) {
            hideMenu();
        } else {
            showMenu();
        }
    }

    $('#nav-menu').click(function(e) {
        e.preventDefault();
        toggleMenu();
    });

    var isHome = $('body').has('#home-page').length;
    $('#nav ul li a, #intro h1 a').each(function() {
        if (!isHome) return;
        $el = $(this);
        var href = $el.attr('href');
        if (href.substring(0, 1) == '/') {
            href = href.substring(1, href.length);

            if (href != "archive/") {
                navElements.push(href);
                current = href;

                $el.click((function(target) {
                    return function(e) {
                        e.preventDefault();
                        if (target != '#menu') {
                            clicked = true;
                            clearActive();
                            hideMenu();
                            setActive(href);
                            $('html, body').animate({
                                scrollTop: $(target).offset().top
                            },
                            500,
                            'swing',
                            function() { clicked = false; });
                        }
                    }
                }(href)));
            }
        }
    });

    if (navElements.length > 0) {
        current = navElements[0];
    }

    function clearActive() {
        $('#nav ul li a').removeClass('active');
    }

    function setActive(curr) {
        $('a[href="/' + curr + '"]').addClass('active');
    }

    $(window).bind('scroll resize', function(e) {
        if (clicked) return;
        var scrollTop = ($(document).scrollTop());
        var windowHeight = Math.round($(window).height());
        var curr = navElements[0];

        for (var i in navElements) {
            var section = navElements[i];
            if ($(section).offset() == undefined) continue;
            var top = $(section).offset().top;
            if (scrollTop + (windowHeight * 0.5) - 46 > top) curr = section;
        }

        if (current != curr) {
            current = curr;
            clearActive();
            setActive(curr);
        }
    });

    setActive('#intro-pad');

});