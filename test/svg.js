
import { expect } from 'chai';

import * as d3 from 'd3';

import d3Builder from '../src';

describe('SVG namespace', () => {
  const builder = d3Builder('body');

  describe('API', () => {
    it('should have DOM, D3 namespace', () => {
      expect(builder).have.property('svg').and.be.a('object');
      expect(builder.svg).have.property('parentNode').and.be.an.instanceof(window.HTMLElement);

      expect(builder.svg).have.property('parentGroup');
      expect(builder.svg).have.property('d3Node');
    });
  });

  describe('Area', () => {
    it('should have namespace of area element', () => {
      const a = builder.shape.area({
        x0: 0,
        x1: (d) => d.x1 || 20,
        y0: 0,
        y1: (d) => d.y1 || 20,
      });
      const aPipe = builder.svg.area(a);

      expect(aPipe).have.property('path');
      expect(aPipe).have.property('replace');
      expect(aPipe).have.property('join');
    });

    it('should correct replace data', () => {
      const a = builder.shape.area({
        x0: 0,
        x1: (d) => d.x1 || 20,
        y0: 0,
        y1: (d) => d.y1 || 20,
      });
      const aPipe = builder.svg.area(a);

      aPipe.replace([{
        x1: 70,
        y1: 10,
      }]);

      expect(aPipe.path.node().getAttribute('d')).to.be.equal('M70,10L0,0Z');
    });

    it('should correct join data', () => {
      const a = builder.shape.area({
        x0: 0,
        x1: (d) => d.x1 || 20,
        y0: 0,
        y1: (d) => d.y1 || 20,
      });
      const aPipe = builder.svg.area(a);

      aPipe.replace([{
        x1: 70,
        y1: 10,
      }]);

      aPipe.join([[{
        x1: 80,
        y1: 42,
      }]]);

      expect(aPipe.path.node().getAttribute('d')).to.be.equal('M80,42L0,0Z');
    });
  });
});
