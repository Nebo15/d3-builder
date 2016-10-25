
import { expect } from 'chai';

import * as d3 from 'd3';

import d3Builder from '../src';

describe('Axis', () => {
  const builder = d3Builder('body');

  describe('API', () => {
    it('should have axis namespace', () => {
      expect(builder).have.property('axis').and.be.a('function');

      // console.log(builder.axis);
      // expect(builder.svg).have.property('parentNode').and.be.an.instanceof(window.HTMLElement);
      //
      // expect(builder.svg).have.property('parentGroup');
      // expect(builder.svg).have.property('d3Node');
    });
  });
});
