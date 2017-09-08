/*global $, jQuery*/


$(document).ready(function () {
  'use strict';

/*Main-nav mobile-menu toggle*/
  function navMenuMobile() {
    $('.main-nav__logo').addClass('main-nav__logo--js-mobile');
    $('.main-nav__menu-toggle').show();
    $('.main-nav__list').hide();
  }
  
  function navMenuWide() {
    $('.main-nav__logo').removeClass('main-nav__logo--js-mobile');
    $('.main-nav__menu-toggle').hide();
    $('.main-nav__list').show();
  }
  
  function navMenuState() {
    var $winsize = $(window).width();
    if ($winsize <= 660) {
      navMenuMobile();
    } else if ($winsize > 660) {
      navMenuWide();
    }
  }
  
  $('.main-nav__menu-toggle').on('click', function (event) {
    event.preventDefault(event);
    $('.main-nav__list').slideToggle('slow');
    
    if ($('.main-nav__menu-toggle').hasClass('main-nav__menu-toggle--active')) {
      $('.main-nav__menu-toggle').removeClass('main-nav__menu-toggle--active');
      setTimeout(function () {
        $('.main-nav__logo').addClass('main-nav__logo--js-mobile');
      }, 600);
    } else {
      $('.main-nav__menu-toggle').addClass('main-nav__menu-toggle--active');
      $('.main-nav__logo').removeClass('main-nav__logo--js-mobile');
    }
  });
  
  $(window).on('resize', function () {
    var $winsize = $(window).width();
    $('.main-nav__menu-toggle').removeClass('main-nav__menu-toggle--active');
    if ($winsize <= 660) {
      navMenuMobile();
    } else if ($winsize > 660) {
      navMenuWide();
    }
  });
  
  navMenuState();
  
/*Sliders behaviour*/
  /*
  $.fn.slider1Switcher = function () {
    var
      $currentInput = $('.slider__input--js1:checked'),
      $nextInput = $currentInput.next(),
      $firstInput = $('.reviews__slider-input--js1').first();
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
      $firstInput = $('.reviews__slider-input--js2').first();
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
    $('.contest__form').find('.contest__input--required-js').each(function () {
      if ($(this).val() === '') {
        $(this).addClass('contest__input--error-js');
      } else if ($(this).val() !== '') {
        $(this).removeClass('contest__input--error-js');
      }
    });
  }
  
  $('.contest__form-submit').on('click', function (event) {
    event.preventDefault(event);
    $('.overlay').show();
    checkInput();
    if ($('.contest__input--error-js').length > 0) {
      $('.contest__form-submit').removeClass('error-state');
      $('.contest__form-submit').addClass('error-state');
      $('.modal-window--error-window').fadeIn();
    } else if ($('.contest__input--error-js').length === 0) {
      $('.contest__form-submit').removeClass('error-state');
      $('.modal-window--success-window').fadeIn();
      $('.modal-window__btn').on('click', function () {
        $('.contest__form').submit();
      });
    }
  });
  

});