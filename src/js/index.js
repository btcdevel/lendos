import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

jQuery(function() {

  const $navListItem  = $('.b-nav__li');
  const $navCloseIcon = $('.b-nav__dropdown-menu-close');
  const $mobCloseIcon = $('.b-nav__mobile-menu-close');
  const $navBurger    = $('.b-nav__burger');

  $navListItem.on('click', function() {
    $navListItem.removeClass('b-nav__li_state-active');
    $(this).addClass('b-nav__li_state-active');
    $('.b-nav__dropdown-block').removeClass('b-nav__dropdown-block_state-active');
    $( '[data-dropdown="' + $( this ).data('nav-item') + '"]' ).addClass('b-nav__dropdown-block_state-active');
  });

  $navCloseIcon.on('click', function() {
    $(this).parents('.b-nav__dropdown-block').removeClass('b-nav__dropdown-block_state-active');
    $navListItem.removeClass('b-nav__li_state-active');
  });

  $navBurger.on('click', function() {
    $('.b-nav__ul').addClass('b-nav__ul_state-active');
  });

  $mobCloseIcon.on('click', function() {
    $('.b-nav__ul').removeClass('b-nav__ul_state-active');
  });

});
