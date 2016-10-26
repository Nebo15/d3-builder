'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var scaleConstructor = function scaleConstructor(type, options) {
  return Object.keys(options).reduce(function (scale, key) {
    if (scale[key]) {
      return scale[key](options[key]);
    }

    return scale;
  }, d3[type]());
};

exports.default = function (parentNode) {
  return {
    linear: function linear() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return scaleConstructor('scaleLinear', options);
    },
    time: function time() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return scaleConstructor('scaleTime', options);
    }
  };
};