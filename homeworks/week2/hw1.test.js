var stars = require('./hw1')

describe("hw1", function() {
  it("should return correct answer when n = 1", function() {
    expect(stars(1)).toEqual(['*'])
  })
})