jQuery(document).ready(function($) {
  var $menuList, $mobileMenu, $window, disableMobileMenuTransitions, enableMobileMenuTransitions, resizeId;
  $window = $(window);
  $mobileMenu = $('#mobile-menu');
  $menuList = $('#nav ul');
  $mobileMenu.click(function(e) {
    if ($mobileMenu.hasClass('active')) {
      $mobileMenu.removeClass('active');
      return $menuList.removeClass('active');
    } else {
      $mobileMenu.addClass('active');
      return $menuList.addClass('active');
    }
  });
  resizeId = null;
  enableMobileMenuTransitions = function() {
    $menuList.removeClass('no-transition');
    $menuList.children('li').removeClass('no-transition');
    if (resizeId) {
      clearTimeout(resizeId);
      return resizeId = null;
    }
  };
  disableMobileMenuTransitions = function(e) {
    if (!$menuList.hasClass('no-transition')) {
      $menuList.addClass('no-transition');
      $menuList.children('li').addClass('no-transition');
    }
    if (resizeId) {
      clearTimeout(resizeId);
    }
    return resizeId = setTimeout(enableMobileMenuTransitions, 100);
  };
  $window.resize(function(e) {
    return disableMobileMenuTransitions();
  });
  Modernizr.addTest('flexbox', Modernizr.testAllProps('flexBasis'));
  Modernizr.addTest('flexboxlegacy', Modernizr.testAllProps('boxDirection'));
  return Modernizr.addTest('flexboxtweener', Modernizr.testAllProps('flexAlign'));
});
