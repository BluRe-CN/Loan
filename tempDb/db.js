
global.users = [];
class db {
    addUser(user) {
        global.users.push(user)
    }
    getUsers() {
        return global.users;
    }
}
module.exports = db;