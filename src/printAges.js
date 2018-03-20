const getUserBirthDate = require('./data/getUserBirthDate')

module.exports.printAges = function(users) {
  return users.map(user => {
    const birthday = getUserBirthDate(user)
    const ageDifMs = Date.now() - birthday
    const ageDate = new Date(ageDifMs)
    return `${user.name} is ${Math.abs(ageDate.getUTCFullYear() - 1970)} years old.`
  })
}