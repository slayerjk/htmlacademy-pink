/*global $, jQuery*/


$(document).ready(function () {
  'use strict';

/*Sliders behaviour*/
  /*
  $.fn.slider1Switcher = function () {
    var
      $currentInput = $('.slider__input--js1:checked'),
      $nextInput = $currentInput.next(),
      $firstInput = $('.slider__input--js1').first();
    $currentInput.removeAttr('checked');
    if ($nextInput.prop('type') === 'radio') {
      $nextInput.prop('checked', 'checked');
    } else {
      $nextInput = $firstInput.prop('checked', 'checked');
    }
  };
  
  $.fn.slider2Switcher = function () {
    var
      $currentInput = $('.slider__input--js2:checked'),
      $nextInput = $currentInput.next(),
      $firstInput = $('.slider__input--js2').first();
    $currentInput.removeAttr('checked');
    if ($nextInput.prop('type') === 'radio') {
      $nextInput.prop('checked', 'checked');
    } else {
      $nextInput = $firstInput.prop('checked', 'checked');
    }
  };
  
  setInterval($.fn.slider1Switcher, 3000);
  
  setInterval($.fn.slider2Switcher, 4000);
  */
  
  /*Pink-form(contest) behaviour*/
  $('.modal-window__btn').on('click', function (e) {
    $('.overlay').fadeOut('slow');
    $('.modal-window').fadeOut('fast');
  });
  
  function checkInput() {
    $('.contest__input').each(function () {
      if ($(this).prop('required') === true && $(this).val() === '') {
        $(this).addClass('contest__input--error-js');
        $('.contest__form-submit').addClass('error-state');
      } else if ($(this).prop('required') === true && $(this).val() !== '') {
        $(this).removeClass('contest__input--error-js');
        $('.contest__form-submit').removeClass('error-state');
      }
    });
  }
  
  $('.contest__form-submit').on('click', function (e) {
    event.preventDefault(e);
    $('.overlay').show();
    checkInput();
    if ($(this).hasClass('error-state')) {
      $('.modal-window--error-window').fadeIn();
    } else {
      $('.modal-window--success-window').fadeIn();
      $('.modal-window__btn').on('click', function () {
        $('.contest__form').submit();
      });
    }
  });
  

});