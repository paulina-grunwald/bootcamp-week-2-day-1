const assert = require("assert")
const { data: users1 } = require("./data/users")
const { data: users2 } = require("./data/users2")
const { printAges, changeCurrentDate } = require("./printAges")
changeCurrentDate(() => Date.parse("03-01-2018"))

function check(output) {
  output.forEach(line => {
    if (line.startsWith("Ava")) {
      it('should say "Ava is 27 years old."', () =>
        assert.equal(line, "Ava is 27 years old."))
    } else if (line.startsWith("James")) {
      it('should say "James is 33 years old."', () =>
        assert.equal(line, "James is 33 years old."))
    } else if (line.startsWith("Danielle")) {
      it('should say "Danielle is 30 years old."', () =>
        assert.equal(line, "Danielle is 30 years old."))
    } else if (line.startsWith("Darnell")) {
      it('should say "Darnell is 35 years old."', () =>
        assert.equal(line, "Darnell is 35 years old."))
    } else {
      it('should have a name we know', () =>
        assert.fail(`String started with unexpected name, but was: ${line}`))
    }
  })
}
describe("printAges", function() {
  check(printAges(users1.concat(users2)))
})
