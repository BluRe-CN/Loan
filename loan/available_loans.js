
class available_loans {
    getLoans() {
        let l = require('../loan/loanType')
        let loan = new l()
        let arr = []
        let month = loan.month(3, 5000, 5, "Easy small loan")
        let year = loan.year(1.5, 50000, 3, "Salary earners discounted loan.")
        arr.push(month)
        arr.push(year)
        return arr
    }
}
module.exports = available_loans;