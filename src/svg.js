
import * as d3 from 'd3';

export default (parentNode, options) => {
  const d3Node = d3.select(parentNode);

  const svg = d3Node.insert(function() {
    return document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  });

  const parentGroup = svg.append('g');

  const api = {
    parentNode,
    parentGroup,
    d3Node,
    svg,

    area(a, datum = [], options = {}) {
      const path = parentGroup.append('path').datum(datum).attr('d', a);

      const areaApi = {
        path,
        replace(datum = []) {
          path.datum(datum).attr('d', a);

          return areaApi;
        },
        update() {
          return areaApi.replace.apply(areaApi, arguments);
        },
        join(data = [], key) {
          const passedPath = path.data(data, key);

          passedPath.enter().append('path').merge(passedPath).attr('d', a);
          passedPath.exit().remove();

          return areaApi;
        }
      };

      return areaApi;
    }
  };

  return api;
};
