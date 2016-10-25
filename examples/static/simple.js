
import * as d3 from 'd3';
import d3Builder from '../../src';

export default () => {
  const builder = d3Builder('#simple', {
    width: 960,
    height: 600,
  });

  const svg = builder.svg.svg;

  const margin = {top: 20, right: 20, bottom: 210, left: 40};
  const margin2 = {top: 430, right: 20, bottom: 30, left: 40};
  const width = +svg.attr("width") - margin.left - margin.right;
  const height = +svg.attr("height") - margin.top - margin.bottom;
  const height2 = +svg.attr("height") - margin2.top - margin2.bottom;

  const parseDate = d3.timeParse("%b %Y");
  const parseDate2 = d3.timeParse("%d-%b-%Y");

  const x = d3.scaleTime().range([0, width]);
  const x2 = d3.scaleTime().rangeRound([0, width]);
  const y = d3.scaleLinear().range([height, 0]);
  const y2 = d3.scaleLinear().rangeRound([height, 0]);

  const areaFn = builder.shape.area({
    x: (d) => x(d.date),
    y0: height,
    y1: (d) => y(d.price),
    curve: d3.curveStep,
  });

  const lineFn = builder.shape.line({
    x: (d) => x2(d.date),
    y: (d) => y2(d.price),
    // curve: d3.curveStep,
  });

  const aPipe = builder.svg.area(areaFn);
  const lPipe = builder.svg.line(lineFn);

  aPipe.path.attr('transform', `translate(${margin.left}, ${margin.top})`);
  lPipe.path.attr('transform', `translate(${margin.left}, ${margin.top})`);

  function type2(d) {

    d.date = parseDate(d.date);
    d.price = +d.price;

    return d;
  }

  d3.csv('data/simple.csv', type2, (error, data) => {
    x2.domain(d3.extent(data, (d) => d.date));
    y2.domain(d3.extent(data, (d) => d.price));
    x.domain(d3.extent(data, (d) => d.date));
    y.domain([0, d3.max(data, (d) => d.price)]);

    aPipe.update(data);
    lPipe.update(data);
  });
}
