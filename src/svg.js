
import * as d3 from 'd3';

export default (parentNode, options = {}) => {
  const d3Node = d3.select(parentNode);

  const svg = d3Node.insert(function() {
    return document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  }).attr('width', options.width).attr('height', options.height);

  const parentGroup = svg.append('g');

  const genApi = (t, datum = [], options = {}) => {
    const path = parentGroup.append('path').datum(datum).attr('d', t);

    const api = {
      path,
      replace(datum = []) {
        path.datum(datum).attr('d', t);

        return api;
      },
      update() {
        return api.replace.apply(api, arguments);
      },
      join(data = [], key, options = {}) {
        const passedPath = path.data(data, key);

        passedPath.enter().append('path').merge(passedPath).attr('d', t);
        passedPath.exit().remove();

        return api;
      },
    };

    return api;
  };

  const api = {
    parentNode,
    parentGroup,
    d3Node,
    svg,

    areas: [],
    lines: [],
    axises: [],

    update(data) {

    },

    line: (t, datum = [], options = {}) => genApi(t, datum, options),
    area: (t, datum = [], options = {}) => genApi(t, datum, options),
  };

  return api;
};
