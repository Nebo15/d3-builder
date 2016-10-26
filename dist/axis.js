'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var axisConstructor = function axisConstructor(_ref) {
  var _ref$orient = _ref.orient;
  var orient = _ref$orient === undefined ? 'Left' : _ref$orient;

  var options = _objectWithoutProperties(_ref, ['orient']);

  return Object.keys(options).reduce(function (axis, key) {
    if (axis[key]) {
      return axis[key](options[key]);
    }

    return axis;
  }, d3['axis' + orient.charAt(0).toUpperCase() + orient.slice(1)]());
};

exports.default = function (options) {
  return axisConstructor(options);
};