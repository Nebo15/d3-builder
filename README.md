
## d3-builder

Chainable builder of d3 charts.


### Simple example
HTML:
```
<div class="chart"></div>
```

JS:
```javascript
import d3Builder from 'd3-builder';

const builder = d3Builder('chart');
// or
const builder = d3Builder(document.querySelector('chart'));

const areaFN = builder.shape.area({
  x0: (d) => fn(d.propName),
  y0: (d) => fn(d.propName),
  x1: (d) => fn(d.propName),
  y1: (d) => fn(d.propName),
});

const areaPipe = builder.svg.area(areaFn);

areaPipe.update([
  { propName: 20 }
]);

areaPipe.replace([
  { propName: 40 }
]);

areaPipe.join([
  [{ propName: 90 }]
]);
```
