'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var shapeConstructor = function shapeConstructor(name, options) {
  return Object.keys(options).reduce(function (shape, key) {
    if (shape[key]) {
      return shape[key](options[key]);
    }

    return shape;
  }, d3[name]());
};

exports.default = function (parentNode) {
  return {
    area: function area() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return shapeConstructor('area', options);
    },
    line: function line() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return shapeConstructor('line', options);
    }
  };
};