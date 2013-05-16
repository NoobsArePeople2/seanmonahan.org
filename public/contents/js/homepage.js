$(document).ready(function () {
    var navElements = []
      , current = null
      , clicked = false;
    $('#nav ul li a, #intro h1 a').each(function() {
        $el = $(this);
        var href = $el.attr('href');
        if (href.substring(0, 1) == '/') {
           href = href.substring(1, href.length);
           navElements.push(href);
           current = href;
           $el.click((function(target) {
                return function(e) {
                    e.preventDefault();
                    clicked = true;
                    clearActive();
                    setActive(href);
                    $('html, body').animate({
                       scrollTop: $(target).offset().top
                       },
                       500,
                       'swing',
                       function() { clicked = false; });
                }
           }(href)));
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
        var scrollTop = ($(document).scrollTop())
          , windowHeight = Math.round($(window).height())
          , curr = navElements[0];
        for (var i in navElements) {
            var section = navElements[i];
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