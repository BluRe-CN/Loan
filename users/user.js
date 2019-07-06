class user {
    constructor() {
        this.loans = []
    }
    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setAge(age) {
        this.age = age;
    }

    getAge() {
        return this.age;
    }

    setLocation(location) {
        this.location = location;
    }

    getLocation() {
        return this.location;
    }

    setSex(sex) {
        this.sex = sex;
    }

    getSex() {
        return this.sex;
    }

    setDateJoined(date) {
        this.dateJoined = date;
    }

    getDateJoined() {
        return this.dateJoined;
    }

    setLoanCount(loanCount) {
        this.loanCount = loanCount;
    }

    getLoanCount() {
        return this.loanCount;
    }

    addLoan(loan) {
        this.loans.push(loan);
    }

    getLoans() {
        return this.loans;
    }
    setPassword(password) {
        this.password = password;
    }
    getPassword() {
        return this.password;
    }

}

module.exports = user;
