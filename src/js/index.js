import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

jQuery(function() {

  const $tariffTag        = $('.b-tariff__tag');
  const $tariffBlock      = $('.b-tariff__card-block');
  const $tariffCardTitle  = $('.b-tariff__card-title');
  const $tariffPopup      = $('.b-tariff__popup');
  const $tariffPopupClose = $('.b-tariff__popup-close');

  $tariffTag.on('click', function() {
    $tariffTag.removeClass('b-tariff__tag_state_active');
    $( this ).addClass('b-tariff__tag_state_active');

    $tariffBlock.addClass('b-tariff__card-block_state_hide');
    $tariffBlock.removeClass('b-tariff__card-block_state_active');

    $( '[data-block="' + $( this ).data('tag') + '"]' ).removeClass('b-tariff__card-block_state_hide');
    $( '[data-block="' + $( this ).data('tag') + '"]' ).addClass('b-tariff__card-block_state_active');

    $( '[data-popup="' + $( this ).data('') + '"]' ).addClass('b-tariff__card-block_state_active');
  });

  $tariffCardTitle.on('click', function() {

    console.log($( this ).data('link'));
    $tariffPopup.removeClass('b-tariff__popup_state_active');
    $( '[data-popup="' + $( this ).data('link') + '"]' ).addClass('b-tariff__popup_state_active');
  });

  $tariffPopupClose.on('click', function() {

    $tariffPopup.removeClass('b-tariff__popup_state_active');

  });

  $('.header__button').on('click', function() {
    $('html,body').animate({scrollTop:$('.b-tariff').offset().top+"px"},{duration:1E3});
  });

});
