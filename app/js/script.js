/*global $, jQuery*/


$(document).ready(function () {
  'use strict';

/*event.preventDefault() gor IE9(event.returnValue = false)*/
  $.fn.eventPreventDefaultSafe = function () {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  };
/*-------------------------------------------------------*/
  /*
  if ($(window).width() < 768) {
    $('.main-nav__list').hide();
    $('.main-nav__menu-toggle').show();
  }
  */
    
  $('.main-nav__menu-toggle').on('click', function () {
    $('.main-nav__list').slideToggle('slow');
    $('.main-nav__menu-toggle').toggleClass('main-nav__menu-toggle--active');
  });
  
});

/*_____etc hints_____*/
/*jQuery Datepicker(datepicker-ru.js - is needed from jQueryUI i18n dir)*/
/*
  $.datepicker.setDefaults($.datepicker.regional[""]);
  $.datepicker.setDefaults($.datepicker.regional["ru"]);

  $(function () {
    $('.input_dater').datepicker({
      dateFormat: 'dd MM yy',
      minDate: new Date()
    });
  });
*/
