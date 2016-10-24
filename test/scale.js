
import { expect } from 'chai';

import * as d3 from 'd3';

import d3Builder from '../src';

describe('Scale', () => {
  const builder = d3Builder('body');

  it('should have related namespace with d3', () => {
    const keys = [
      'scaleLinear',
      'scaleTime',
    ];

    keys.forEach((key) => {
      expect(builder.scale[key]).to.be.ok;
      expect(builder.scale[key]).to.be.a('function')
    });
  });

  describe('Scale Time', () => {
    it('should pass domain option', () => {
      const domain = [new Date(), new Date(2012, 1, 1)];
      const scale = builder.scale.scaleTime({ domain });

      expect(scale.domain()).to.be.eql(domain);
    });

    it('should pass range option', () => {
      const range = [0, Math.random()];
      const scale = builder.scale.scaleTime({ range });

      expect(scale.range()).to.be.eql(range);
    });
  });

  describe('Scale Linear', () => {
    it('should pass domain option', () => {
      const domain = [0, Math.random()];
      const scale = builder.scale.scaleLinear({ domain });

      expect(scale.domain()).to.be.eql(domain);
    });

    it('should pass range option', () => {
      const range = [0, Math.random()];
      const scale = builder.scale.scaleLinear({ range });

      expect(scale.range()).to.be.eql(range);
    });
  });
});
