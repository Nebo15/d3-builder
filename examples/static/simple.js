
import d3Builder from '../../src';

export default () => {
  const builder = d3Builder('#simple');

  const a = builder.shape.area({
    x0: 0,
    x1: (d) => d.x1 || 20,
    y0: (d) => d.y0 || 0,
    y1: (d) => d.y1 || 20,
  });

  const aPipe = builder.svg.area(a);

  aPipe.replace([{
    x1: 50,
    // x0: 0,
    y1: 50,
    // y0: 20,
  }]);

  // aPipe.join([
  //   // [{ x1: 30, y1: 30 }],
  //   // [{ x1: 90, y1: 32 }, { y0: 0 }],
  // ]);
}
