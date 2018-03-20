module.exports.printAges = function(users, getBirthday) {
  return users.map(user => {
    const birthday = getBirthday(user)
    const ageDifMs = Date.now() - birthday
    const ageDate = new Date(ageDifMs)
    return `${user.name} is ${Math.abs(ageDate.getUTCFullYear() - 1970)} years old.`
  })
}
