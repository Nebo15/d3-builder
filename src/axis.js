
import * as d3 from 'd3';

const axisConstructor = (scale, { orient = 'Left', ...options }) => {
  return Object.keys(options).reduce((axis, key) => {
    if (axis[key]) {
      return axis[key](options[key]);
    }

    return axis;
  }, d3[`axis${orient.charAt(0).toUpperCase()}${orient.slice(1)}`](scale))
}
export default () => ({ create: (scale, options) => axisConstructor(scale,options) });
