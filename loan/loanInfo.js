
class loanInfo {
    constructor(amountRequested, rate, time, interest, description, date, maturityDate) {
        this.amountRequested = amountRequested;
        this.time = time
        this.rate = rate
        this.interest = interest
        this.maturityDate = maturityDate
        this.date = date
        this.description = description
    }

    getInterest() {
        return `${this.interest}`
    }

    getAmount() {
        return `${this.amountRequested}`
    }

    getTime() {
        let time = `${this.time}`
        if (time === 1) {
            return "1 month"
        }

        if (time < 12) {
            time *= 12
        }
        if (time === 12) {
            return time + "1 yr"
        } else if (time > 12) {
            time /= 12;
            return time + " yrs"
        } else
            return time + " months"
    }
    getRate() {
        return `${this.rate}`
    }
    getDate() {
        return `${this.date}`
    }
    getDescription() {
        return `${this.description}`
    }
    getMaturityDate() {
        return `${this.maturityDate}`;
    }
}
module.exports = loanInfo;

