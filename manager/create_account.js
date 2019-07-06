
class create_account {

    constructor(name, password, age, location, callback) {
        let db = require('../tempDb/db');
        db = new db()
        let user = require('../users/user');
        user = new user()
        var users = db.getUsers()
        var exists = false;
        users.forEach(user => {
            if (name.toLowerCase() === user.getName().toLowerCase()) {
                callback(new Error("User already exists!"), "")
                exists = true;
            }
        })
        if (!exists) {
            user.setName(name)
            user.setAge(age)
            user.setLocation(location)
            user.setPassword(password)
            db.addUser(user)
            callback(null, "Congratulations, account has been created!")
            return user;
        }
    }

}
module.exports = create_account;
