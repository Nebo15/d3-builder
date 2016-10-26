
import * as d3 from 'd3';

const axisConstructor = ({ orient = 'Left', ...options }) =>
  Object.keys(options).reduce((axis, key) => {
    if (key === 'attrs') {
      return options[key].reduce((s, attr) =>
        shape.attr(attr.key, attr.value)
      , shape);
    }

    if (axis[key]) {
      return axis[key](options[key]);
    }

    return axis;
  }, d3[`axis${orient.charAt(0).toUpperCase()}${orient.slice(1)}`]())

export default (options) => axisConstructor(options);
