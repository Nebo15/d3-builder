
import { expect } from 'chai';

import d3Builder from '../src';

describe('Main API', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should be a function', () => {
    expect(d3Builder).to.be.a('function');
  });

  it('should be a correct length of arguments', () => {
    expect(d3Builder.length).to.be.equal(2);
  });

  it('should return object', () => {
    expect(d3Builder('body')).to.be.a('object');
  });

  it('should have shape namespace', () => {
    const builder = d3Builder('body');

    expect(builder.shape).to.be.ok;
    expect(builder.shape).to.be.a('object');
  });

  it('should have scale namespace', () => {
    const builder = d3Builder('body');

    expect(builder.scale).to.be.ok;
    expect(builder.scale).to.be.a('object');
  });

  it('should create svg element at initialization', () => {
    const builder = d3Builder('body');

    expect(builder).have.property('svg');
    expect(builder.svg).to.be.a('object');
  });
});
