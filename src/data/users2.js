const User = require('./userClass')

class User2 extends User {
  constructor(name, birthday) {
    super(name)
    this.birthday = birthday
  }
  getBirthday() {
    return this.birthday
  }
}

module.exports.data = [
  new User2("Ava", 638928000000),
  new User2("James", 476496000000),
  new User2("Danielle", 558662400000),
  new User2("Darnell", 393552000000)
]
