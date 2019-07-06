

class apply {
    constructor() {
        this.db = require('../tempDb/db')
        this.db = new this.db()
    }
    getAppliedUsers() {
        return this.db;
    }
    apply(user, loanType, callback) {
        if (this.hasLoansInRange(user, loanType)) {
            callback(new Error("User has a loan running within this period"))
            return;
        }
        user.addLoan(loanType)
        callback(null, "Congratulations, you've been granted your loan!")
    }

    hasLoansInRange(user, loanRequest) {
        let loans = user.getLoans()
        let mDate = loanRequest.getMaturityDate();
        let inRange = false;
        loans.forEach(element => {
            let mDate2 = element.getMaturityDate()
            if (mDate2 <= mDate) {
                inRange = true;
            }
        })
        return inRange;
    }

}
module.exports = apply


