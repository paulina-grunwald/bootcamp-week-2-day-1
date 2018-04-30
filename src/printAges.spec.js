const assert = require("assert")
const { data: userData } = require("./data/users2")
const { printAges, changeCurrentDate } = require("./printAges")
changeCurrentDate(() => Date.parse("03-01-2018"))

const [ava, james, danielle, darnell] = printAges(userData)

describe("printAges", function() {
  it('should say "Ava is 27 years old."', () => {
    assert.equal(ava, "Ava is 27 years old.")
  })
  it('should say "James is 33 years old."', () => {
    assert.equal(james, "James is 33 years old.")
  })
  it('should say "Danielle is 30 years old."', () => {
    assert.equal(danielle, "Danielle is 30 years old.")
  })
  it('should say "Darnell is 35 years old."', () => {
    assert.equal(darnell, "Darnell is 35 years old.")
  })
})
