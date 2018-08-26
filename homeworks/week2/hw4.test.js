var isPalindromes = require('./hw4')

describe("hw4", function() {
  it("should return correct answer when str = abcdcba", function() {
    expect(isPalindromes('abcdcba')).toBe(true)
  })
})