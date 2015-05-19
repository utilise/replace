var expect = require('chai').expect
  , replace = require('./')

describe('replace', function() {
  it('should replace text', function(){
    expect(replace('a', 'b')('a')).to.be.equal('b')
  })
})