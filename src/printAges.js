module.exports.printAges = function(users) {
  return users.map(user => {
    const ageDifMs = Date.now() - user.getBirthday()
    const ageDate = new Date(ageDifMs)
    return `${user.name} is ${Math.abs(
      ageDate.getUTCFullYear() - 1970
    )} years old.`
  })
}
