let currentDate = Date.now
module.exports.changeCurrentDate = function(newCurrentDate) {
  currentDate = newCurrentDate
}

module.exports.printAges = function(users, getBirthday) {
  return users.map(user => {
    const ageDifMs = currentDate() - user.getBirthday()
    const ageDate = new Date(ageDifMs)
    return `${user.name} is ${Math.abs(
      ageDate.getUTCFullYear() - 1970
    )} years old.`
  })
}
