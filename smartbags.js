/**
 * jQuery SmartBags plugin wrapper
 * @external "jQuery.fn"
 * @see {@link http://docs.jquery.com/Plugins/Authoring The jQuery Plugin Guide}
 */
(function ($) {
  'use strict';

  /**
   * SmartBags plugin
   *
   * @example
   * $('[data-smartbag]').smartbags();
   *
   * $('[data-smartbag]').smartbags({
   *   letterFactor: 100,
   *   delayBuffer: 1500,
   *   messageSelector: '.message',
   *   fadeOutClass: 'show'
   * });
   * 
   * @param  {userSettings} Settings overrided by the user
   * @return {Object} jQuery element list
   */
  $.fn.smartbags = function (userSettings) {
    var settings;
    var fadeOutSmartBag;

    settings = {
      letterFactor: 70,
      delayBuffer: 2000,
      messageSelector: '[data-smartbag-message]',
      fadeOutClass: 'in'
    };

    $.extend(settings, userSettings);

    fadeOutSmartBag = function ($element) {
      $element.removeClass(settings.fadeOutClass);
    };

    return this.each(function () {
      var $element;
      var lettersCount;
      var delay;

      $element = $(this);

      lettersCount = $element.find(settings.messageSelector).text().length;
      delay = lettersCount * settings.letterFactor + settings.delayBuffer;

      setTimeout(fadeOutSmartBag.bind(null, $element), delay);
    });
  };

})(jQuery);