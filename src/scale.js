
import * as d3 from "d3";

const scaleConstructor = (type, included, options) =>
  Object.keys(options).filter((name) =>
    included.indexOf(name) > -1
  ).reduce((scale, key) => {
    if (scale[key]) {
      return scale[key](options[key]);
    }

    return scale;
  }, d3[type]());

const keysOfScales = [
  'domain',
  'range',
];

export default (parentNode) => {
  return {
    scaleLinear: (options = {}) => scaleConstructor('scaleLinear', keysOfScales,options),
    scaleTime: (options = {}) => scaleConstructor('scaleTime', keysOfScales, options),
  };
};
