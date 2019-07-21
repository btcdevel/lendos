import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

jQuery(function() {

  const $tariffTag    = $('.tariff__tag');

  $tariffTag.on('click', function() {
    $tariffTag.removeClass('tariff__tag_state_active');
    $( this ).addClass('tariff__tag_state_active');
    // $navListItem.removeClass('b-nav__li_state-active');
    // $(this).addClass('b-nav__li_state-active');
    // $('.b-nav__dropdown-block').removeClass('b-nav__dropdown-block_state-active');
    // $( '[data-dropdown="' + $( this ).data('nav-item') + '"]' ).addClass('b-nav__dropdown-block_state-active');
  });

});
