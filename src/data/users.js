function User(name, birthday) {
  this.name = name
  this.birthday = Date.parse(birthday)
  this.getBirthday = function() {
    return this.birthday
  }
}

module.exports.data = [
  new User("Ava", "1990-04-01"),
  new User("James", "1985-02-06"),
  new User("Danielle", "1987-09-15"),
  new User("Darnell", "1982-06-22")
]

