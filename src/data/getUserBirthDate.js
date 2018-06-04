module.exports = function(user) {
    if(user.birthday) {
        return user.birthday
    } else {
        return Date.parse(user.dateOfBirth)
    }
}