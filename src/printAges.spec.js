const assert = require("assert")
const { data: users1, getUserBirthDate: getBirthday1 } = require("./data/users")
const { data: users2, getUserBirthDate: getBirthday2 } = require("./data/users2")
const { printAges, changeCurrentDate } = require("./printAges")
changeCurrentDate(() => Date.parse("03-01-2018"))


function check([ava, james, danielle, darnell]) {
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
}
describe("printAges user data 1", function() {
    check(printAges(users1, getBirthday1))
})
describe("printAges user data 2", function() {
    check(printAges(users2, getBirthday2))
})
