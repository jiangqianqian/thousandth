const should = require('chai').should();
// const thousandth = require('../index')
import thousandth from '../index'
describe('Result', () => {
  it('8888 res is 8,888', () => {
    thousandth(8888).should.be.equal('8,888');
  })
  it('8888 res is 8,888.000', () => {
    thousandth(8888,3).should.be.equal('8,888.000');
  })
})
