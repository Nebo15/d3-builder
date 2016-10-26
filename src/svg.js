
import * as d3 from 'd3';

export default (parentNode, options = {}) => {
  const d3Node = d3.select(parentNode);

  const svg = d3Node.insert(function() {
    return document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  }).attr('width', options.width).attr('height', options.height);

  const parentGroup = svg.append('g');

  const genApi = (t, datum = [], options = {}) => {
    const path = parentGroup.append('path').datum(datum).attr('d', t);

    if (options.attrs) {
      options.attrs.reduce((p, attr) =>{
        return p.attr(attr.key, attr.value)
      }, path);
    }

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
    scales: [],

    update(data) {
      return [ api.scales, api.areas, api.lines, api.axises ].reduce((d, elems) => {
        elems.reduce((d, elem) => {
          elem.update(d);

          return d;
        }, d);

        return d;
      }, data);
    },

    scale(t, options = {}) {
      const sApi = {
        scale: t,
        update(data) {
          return Object.keys(options).reduce((scale, key) => {
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

    axis(t, options = {}) {
      const axisGroup = parentGroup.append('g');

      api.axises.push({
        group: axisGroup,
        axis: t,
        update() {
          axisGroup.call(t);
        }
      });

      if (options.attrs) {
        options.attrs.reduce((g, attr) =>{
          return g.attr(attr.key, attr.value)
        }, axisGroup);
      }

      return axisGroup.call(t);
    },

    line(t, datum = [], options = {}) {
      const l = genApi(t, datum, options);
      api.lines.push(l);

      return l;
    },

    area(t, datum = [], options = {}) {
      const l = genApi(t, datum, options);
      api.lines.push(l);

      return l;
    },
  };

  return api;
};
