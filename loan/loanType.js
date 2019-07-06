class loanType {
    constructor() {
        this.loanInfo = require('./loanInfo')
    }

    calcInterest(amount, rate, time) {
        return (amount * rate * time) / 100;
    }

    month(length, amount, rate, description) {
        let time = length / 12
        let interest = this.calcInterest(amount, rate, time)
        let date = new Date()
        let maturityDate = date.getDay() + length
        date = date.toISOString().slice(0, 10)
        return new this.loanInfo(amount, rate, time, interest, description, date, maturityDate)
    }
    year(length, amount, rate, description) {
        let time = length * 12
        return this.month(time, amount, rate, description)
    }

}


module.exports = loanType;