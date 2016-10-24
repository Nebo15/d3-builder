
import * as d3 from "d3";

const shapeConstructor = (name, options) =>
  Object.keys(options).reduce((shape, key) => {
    if (shape[key]) {
      return shape[key](options[key]);
    }

    return shape;
  }, d3[name]());

export default (parentNode) => {
  return {
    area: (options = {}) => shapeConstructor('area', options),
    line: (options = {}) => shapeConstructor('line', options),
  };
};
