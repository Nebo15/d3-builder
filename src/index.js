
import * as d3 from 'd3';

import shape from './shape';
import scale from './scale';
import svg from './svg';

export default (parent, options) => {
  const parentNode = parent instanceof window.HTMLElement ?
    parent : document.querySelector(parent);

  const svgAPI = svg(parentNode);

  const api = {
    svg: svgAPI,
    shape: shape(svgAPI.parentGroup),
    scale: scale(svgAPI.parentGroup),
  };

  return api;
}
