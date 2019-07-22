import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

jQuery(function() {

  const $tariffTag        = $('.tariff__tag');
  const $tariffBlock      = $('.tariff__card-block');
  const $tariffCardTitle  = $('.tariff__card-title');
  const $tariffPopup      = $('.tariff__popup');
  const $tariffPopupClose = $('.tariff__popup-close');

  $tariffTag.on('click', function() {
    $tariffTag.removeClass('tariff__tag_state_active');
    $( this ).addClass('tariff__tag_state_active');

    $tariffBlock.addClass('tariff__card-block_state_hide');
    $tariffBlock.removeClass('tariff__card-block_state_active');

    $( '[data-block="' + $( this ).data('tag') + '"]' ).removeClass('tariff__card-block_state_hide');
    $( '[data-block="' + $( this ).data('tag') + '"]' ).addClass('tariff__card-block_state_active');

    $( '[data-popup="' + $( this ).data('') + '"]' ).addClass('tariff__card-block_state_active');
  });

  $tariffCardTitle.on('click', function() {

    console.log($( this ).data('link'));
    $tariffPopup.removeClass('tariff__popup_state_active');
    $( '[data-popup="' + $( this ).data('link') + '"]' ).addClass('tariff__popup_state_active');
  });

  $tariffPopupClose.on('click', function() {

    $tariffPopup.removeClass('tariff__popup_state_active');

  });

});
