var add = require('./hw5')

describe("hw5", function() {
  it("should return correct answer when a=10 and b=10", function() {
    expect(add('10', '10')).toBe('20')
  })
})