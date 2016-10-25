
import * as d3 from "d3";

const scaleConstructor = (type, options) =>
  Object.keys(options).reduce((scale, key) => {
    if (scale[key]) {
      return scale[key](options[key]);
    }

    return scale;
  }, d3[type]());

export default (parentNode) => {
  return {
    linear: (options = {}) => scaleConstructor('scaleLinear', options),
    time: (options = {}) => scaleConstructor('scaleTime', options),
  };
};
