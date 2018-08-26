var alphaSwap = require('./hw2')

describe("hw2", function() {
  it("should return correct answer when str = nick", function() {
    expect(alphaSwap('nick')).toBe('NICK')
  })
})