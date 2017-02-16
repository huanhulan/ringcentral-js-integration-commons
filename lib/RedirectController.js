'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RedirectController = function RedirectController() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      prefix = _ref.prefix;

  (0, _classCallCheck3.default)(this, RedirectController);

  window.addEventListener('load', function () {
    var callbackUri = window.location.href;
    if (window.opener && window.opener.oAuthCallback) {
      window.opener.oAuthCallback(callbackUri);
      window.close();
    } else {
      // fall back to use localStorage as a vessel to avoid opener is null bug
      var key = prefix + '-redirect-callbackUri';
      localStorage.removeItem(key);
      window.addEventListener('storage', function (e) {
        if (e.key === key && (!e.newValue || e.newValue === '')) {
          window.close();
        }
      });
      localStorage.setItem(key, callbackUri);
    }
  });
};

exports.default = RedirectController;
//# sourceMappingURL=RedirectController.js.map