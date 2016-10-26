'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (parentNode) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var d3Node = d3.select(parentNode);

  var svg = d3Node.insert(function () {
    return document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  }).attr('width', options.width).attr('height', options.height);

  var parentGroup = svg.append('g');

  var genApi = function genApi(t) {
    var datum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var path = parentGroup.append('path').datum(datum).attr('d', t);

    if (options.attrs) {
      options.attrs.reduce(function (p, attr) {
        return p.attr(attr.key, attr.value);
      }, path);
    }

    var api = {
      path: path,
      replace: function replace() {
        var datum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        path.datum(datum).attr('d', t);

        return api;
      },
      update: function update() {
        return api.replace.apply(api, arguments);
      },
      join: function join() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var key = arguments[1];
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var passedPath = path.data(data, key);

        passedPath.enter().append('path').merge(passedPath).attr('d', t);
        passedPath.exit().remove();

        return api;
      }
    };

    return api;
  };

  var api = {
    parentNode: parentNode,
    parentGroup: parentGroup,
    d3Node: d3Node,
    svg: svg,

    areas: [],
    lines: [],
    axises: [],
    scales: [],

    update: function update(data) {
      return [api.scales, api.areas, api.lines, api.axises].reduce(function (d, elems) {
        elems.reduce(function (d, elem) {
          elem.update(d);

          return d;
        }, d);

        return d;
      }, data);
    },
    scale: function scale(t) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var sApi = {
        scale: t,
        update: function update(data) {
          return Object.keys(options).reduce(function (scale, key) {
            if (t[key]) {
              return t[key](options[key](data));
            }

            return t;
          }, t);
        }
      };

      api.scales.push(sApi);

      return sApi;
    },
    axis: function axis(t) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var axisGroup = parentGroup.append('g');

      api.axises.push({
        group: axisGroup,
        axis: t,
        update: function update() {
          axisGroup.call(t);
        }
      });

      if (options.attrs) {
        options.attrs.reduce(function (g, attr) {
          return g.attr(attr.key, attr.value);
        }, axisGroup);
      }

      return axisGroup.call(t);
    },
    line: function line(t) {
      var datum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var l = genApi(t, datum, options);
      api.lines.push(l);

      return l;
    },
    area: function area(t) {
      var datum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var l = genApi(t, datum, options);
      api.lines.push(l);

      return l;
    }
  };

  return api;
};