class login {
    constructor(name, password, callback) {
        let usersDb = require('../tempDb/db')
        usersDb = new usersDb()
        let wrongC = true;
        let users = usersDb.getUsers()
        users.forEach(user => {
            if (name === user.getName()) {
                if (password === user.getPassword()) {
                    this.profile = user;
                    callback(null, "Login successful.")
                    wrongC = false;
                }
            }
        })
        if (wrongC) {
            callback(new Error("Username or password incorrect!"))
        }
    }
    getProfile() {
        return this.profile
    }
}
module.exports = login;


