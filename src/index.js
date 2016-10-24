
import * as d3 from 'd3';

import shape from './shape';
import scale from './scale';

export default (parent, options) => {
  const parentNode = parent instanceof window.HTMLElement ?
    parent : document.querySelector(parent);
  const d3Node = d3.select(parentNode);

  const svg = d3Node.insert(function() {
    return document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  });

  const parentGroup = svg.append('g');

  const api = {
    shape: shape(parentGroup),
    scale: scale(parentGroup),
    svg,
    parentGroup,
    parentNode,
    d3Node,
  };

  return api;
}
