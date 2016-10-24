
import d3Builder from '../../src';

export default () => {
  const builder = d3Builder('#simple');

  const areaFn = builder.shape.area({
    x0: 0,
    x1: (d) => d.x1 || 20,
    y0: (d) => d.y0 || 0,
    y1: (d) => d.y1 || 20,
  });

  const lineFn = builder.shape.line({
    x: (d) => d.x,
    y: (d) => d.y,
  });

  const aPipe = builder.svg.area(areaFn);
  const lPipe = builder.svg.line(lineFn);

  aPipe.update([{
    x1: 50,
    y1: 50,
  }, {
    x1: 50,
    y1: 40,
  }]);

  lPipe.update([{
    x: 93.24,
    y: 50,
  }, {
    x: 95.35,
    y: 52,
  }, {
    x: 99.92,
    y: 54,
  }])

}
