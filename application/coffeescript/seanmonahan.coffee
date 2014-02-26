jQuery(document).ready ($) ->

    $window = $(window)

    ####################################################
    # Mobile Menu

    $mobileMenu = $('#mobile-menu')
    $menuList   = $('#nav ul')

    $mobileMenu.click((e) ->
        if $mobileMenu.hasClass 'active'
            $mobileMenu.removeClass 'active'
            $menuList.removeClass 'active'
        else
            $mobileMenu.addClass 'active'
            $menuList.addClass 'active'
    )

    resizeId = null
    enableMobileMenuTransitions = () ->
        $menuList.removeClass 'no-transition'
        $menuList.children('li').removeClass 'no-transition'
        if (resizeId)
            clearTimeout(resizeId)
            resizeId = null

    disableMobileMenuTransitions = (e) ->
        if not $menuList.hasClass 'no-transition'
            $menuList.addClass 'no-transition'
            $menuList.children('li').addClass 'no-transition'

        if resizeId
          clearTimeout(resizeId)

        resizeId = setTimeout(enableMobileMenuTransitions, 100)

    $window.resize (e) ->
        disableMobileMenuTransitions()


    ####################################################
    # Modernizr test for Flex Box.
    # See: https://github.com/Modernizr/Modernizr/issues/812
    Modernizr.addTest('flexbox', Modernizr.testAllProps('flexBasis'))
    Modernizr.addTest('flexboxlegacy', Modernizr.testAllProps('boxDirection'))
    Modernizr.addTest('flexboxtweener', Modernizr.testAllProps('flexAlign'))