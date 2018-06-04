class User {
  constructor(name, birthday) {
    this.name = name
    this.dateOfBirth = birthday
  }
  getBirthday() {
    return this.dateOfBirth 
  }
}

module.exports.data = [
  new User("Ava", 638928000000),
  new User("James", 476496000000),
  new User("Danielle", 558662400000),
  new User("Darnell", 393552000000)
]
