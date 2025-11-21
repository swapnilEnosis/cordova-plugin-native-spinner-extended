var exec = require('cordova/exec');

module.exports = {
  show: function (title, message, cancelCallback, iosOptions) {
    if (cancelCallback == true && typeof cancelCallback !== "function") {
      cancelCallback = function () { };
    }
    var isPlatformIos = /iPad|Macintosh|iPhone|iPod/.test(navigator.userAgent);
    var params = [title, message, !!cancelCallback];
    if (isPlatformIos) {
      if (typeof iosOptions != "object") {
        iosOptions = { overlayOpacity: 0.35, textColorRed: 1, textColorGreen: 1, textColorBlue: 1, fontSize: 10 }
      }
      params = params.concat([(iosOptions.overlayOpacity || 0.35), (iosOptions.textColorRed || 1), (iosOptions.textColorGreen || 1), (iosOptions.textColorBlue || 1), (iosOptions.fontSize || 10)])
    }
    cordova.exec(cancelCallback, null, 'SpinnerDialog', 'show', params);
  },
  hide: function (wpStatusbar, success, fail) {
    cordova.exec(success, fail, 'SpinnerDialog', 'hide', [wpStatusbar]);
  }
};
