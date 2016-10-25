
import { expect } from 'chai';

import * as d3 from 'd3';

import d3Builder from '../src';

describe('Scale', () => {
  const builder = d3Builder('body');

  it('should have related namespace with d3', () => {
    const keys = [
      'linear',
      'time',
    ];

    keys.forEach((key) => {
      expect(builder.scale[key]).to.be.ok;
      expect(builder.scale[key]).to.be.a('function')
    });
  });

  describe('Scale Time', () => {
    it('should pass domain option', () => {
      const domain = [new Date(), new Date(2012, 1, 1)];
      const scale = builder.scale.time({ domain });

      expect(scale.domain()).to.be.eql(domain);
    });

    it('should pass range option', () => {
      const range = [0, Math.random()];
      const scale = builder.scale.time({ range });

      expect(scale.range()).to.be.eql(range);
    });
  });

  describe('Scale Linear', () => {
    it('should pass domain option', () => {
      const domain = [0, Math.random()];
      const scale = builder.scale.linear({ domain });

      expect(scale.domain()).to.be.eql(domain);
    });

    it('should pass range option', () => {
      const range = [0, Math.random()];
      const scale = builder.scale.linear({ range });

      expect(scale.range()).to.be.eql(range);
    });
  });
});
