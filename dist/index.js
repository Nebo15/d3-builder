'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

var _shape = require('./shape');

var _shape2 = _interopRequireDefault(_shape);

var _scale = require('./scale');

var _scale2 = _interopRequireDefault(_scale);

var _svg = require('./svg');

var _svg2 = _interopRequireDefault(_svg);

var _axis = require('./axis');

var _axis2 = _interopRequireDefault(_axis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (parent, options) {
  var parentNode = parent instanceof window.HTMLElement ? parent : document.querySelector(parent);

  var svgAPI = (0, _svg2.default)(parentNode, options);

  var api = {
    svg: svgAPI,
    shape: (0, _shape2.default)(svgAPI.parentGroup),
    scale: (0, _scale2.default)(svgAPI.parentGroup),
    axis: (0, _axis2.default)(svgAPI.parentGroup)
  };

  return api;
};