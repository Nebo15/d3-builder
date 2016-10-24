
import { expect } from 'chai';

import * as d3 from 'd3';

import d3Builder from '../src';

describe('Shape', () => {
  const builder = d3Builder('body');

  it('should have namespace related of d3', () => {
    const keys = [
      'area',
      'line',

      // 'radialArea',
      // 'radialLine',
      // 'arc',
      // 'pies',
      // 'stack',

      // 'curves',
      // 'curveBasis',
      // 'curveBasisClosed',
      // 'curveBasisOpen',
      // 'curveBundle',
      // 'curveCardinal',
      // 'curveCardinalClosed',
      // 'curveCatmullRom',
      // 'curveCatmullRomClosed',
      // 'curveCatmullRomOpen',
      // 'curveLinear',
      // 'curveLinearClosed',
      // 'curveMonotoneX',
      // 'curveMonotoneY',
      // 'curveNatural',
      // 'curveStep',
      // 'curveStepAfter',
      // 'curveStepBefore',
      //
    ];

    keys.forEach((key) => {
      expect(builder.shape[key]).to.be.ok;
      expect(builder.shape[key]).to.be.a('function')
    });
  });

  describe('Area', () => {
    describe('xN', () => {
      it('should pass x option', () => {
        const x = Math.random();
        const area = builder.shape.area({ x });

        expect(area.x()()).to.be.equal(x);
      });

      it('should pass x0 option', () => {
        const x0 = Math.random();
        const area = builder.shape.area({ x0 });

        expect(area.x0()()).to.be.equal(x0);
      });

      it('should pass x1 option', () => {
        const x1 = Math.random();
        const area = builder.shape.area({ x1 });

        expect(area.x1()()).to.be.equal(x1);
      });
    });

    describe('yN', () => {
      it('should pass y option', () => {
        const y = Math.random();
        const area = builder.shape.area({ y });

        expect(area.y()()).to.be.equal(y);
      });

      it('should pass y0 option', () => {
        const y0 = Math.random();
        const area = builder.shape.area({ y0 });

        expect(area.y0()()).to.be.equal(y0);
      });

      it('should pass y1 option', () => {
        const y1 = Math.random();
        const area = builder.shape.area({ y1 });

        expect(area.y1()()).to.be.equal(y1);
      });
    });

    describe('defined', () => {
      it('should pass defined option', () => {
        const defined = (d) => !!d;
        const area = builder.shape.area({ defined });

        expect(area.defined()()).to.be.equal(defined());
      });
    });

    describe('context', () => {
      it('should pass context option', () => {
        const context = document.createElement('div');
        const area = builder.shape.area({ context });

        expect(area.context()).to.be.equal(context);
      });
    });
  });

  describe('Line', () => {
    describe('coordinates', () => {
      it('should pass x option', () => {
        const x = Math.random();
        const line = builder.shape.line({ x });

        expect(line.x()()).to.be.equal(x);
      });

      it('should pass y option', () => {
        const y = Math.random();
        const line = builder.shape.line({ y });

        expect(line.y()()).to.be.equal(y);
      });

      describe('defined', () => {
        it('should pass defined option', () => {
          const defined = (d) => !!d;
          const line = builder.shape.line({ defined });

          expect(line.defined()()).to.be.equal(defined());
        });
      });

      describe('context', () => {
        it('should pass context option', () => {
          const context = builder.shape.line({});
          const line = builder.shape.line({ context });

          expect(line.context()).to.be.equal(context);
        });
      });
    });
  })
});
