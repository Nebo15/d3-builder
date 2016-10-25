
import * as d3 from 'd3';
import d3Builder from '../../src';

export default () => {
  const builder = d3Builder('#simple', {
    width: 960,
    height: 600,
  });

  const wrapper = builder.svg;
  const svg = wrapper.svg;

  const margin = {top: 20, right: 20, bottom: 210, left: 40};
  const margin2 = {top: 430, right: 20, bottom: 30, left: 40};
  const width = +svg.attr("width") - margin.left - margin.right;
  const height = +svg.attr("height") - margin.top - margin.bottom;
  const height2 = +svg.attr("height") - margin2.top - margin2.bottom;

  const parseDate = d3.timeParse("%b %Y");
  const parseDate2 = d3.timeParse("%d-%b-%Y");

  const priceRange = (data) => [0, d3.max(data, (d) => d.price)]
  const dateExtent = (data) => d3.extent(data, (d) => d.date)

  const x = wrapper.scale(builder.scale.time({
    range: [0, width]
  }), { domain: dateExtent });

  const y = wrapper.scale(builder.scale.linear({
    range: [height, 0],
  }), { domain: priceRange });

  const x2 = wrapper.scale(builder.scale.time({
    rangeRound: [0, width]
  }), { domain: dateExtent });

  const y2 = wrapper.scale(builder.scale.linear({
    rangeRound: [height, 0]
  }), { domain: priceRange });

  // const aPipe = wrapper.area(builder.shape.area({
  //   x: (d) => x.scale(d.date),
  //   y0: height,
  //   y1: (d) => y.scale(d.price),
  //   curve: d3.curveStep,
  // }));

  const lPipe = wrapper.line(builder.shape.line({
    x: (d) => x2.scale(d.date),
    y: (d) => y2.scale(d.price),
    curve: d3.curveStep,
  }));

  // aPipe.path.attr('transform', `translate(${margin.left}, ${margin.top})`);
  lPipe.path.attr('transform', `translate(${margin.left}, ${margin.top})`);

  function type2(d) {

    d.date = parseDate(d.date);
    d.price = +d.price;

    return d;
  }

  d3.csv('data/simple.csv', type2, (error, data) => {
    wrapper.update(data);
  });
}
