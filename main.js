let loan_type = require('./loan/loanType');
let user = require('./users/user')
let creator = require('./manager/create_account')
let availableLoans = require('./loan/available_loans')
availableLoans = new availableLoans()
let apply = require('./users/apply')
let login = require('./users/login')
let loanInfo = require('./loan/loanInfo')
let db = require('./tempDb/db')
apply = new apply()


//Let's create an account for Kia Kia
let kiaKia = new creator("Kia Kia", "kiaKia", 20, "Lagos State", function (error, msg) {
    if (error) {
        console.log(error)
    }
    console.log(msg)
})

//Let's create an account for Ren Money
let renMoney = new creator("Ren Money", "renMoney", 25, "Delta State", function (error, msg) {
    if (error) {
        console.log(error)
    }
    console.log(msg)
})


//Initialize a loan for Kia Kia
let loanForKiaKia = availableLoans.getLoans()[0]

//Initialize a loan for RenMoney
let loanForRenMoney = availableLoans.getLoans()[1]

//Apply loan for Kia Kia

apply.apply(kiaKia, loanForKiaKia, function (error, msg) {
    if (error) {
        console.log(error)
    }
    console.log(msg)
})
apply.apply(kiaKia, loanForKiaKia, function (error, msg) {
    if (error) {
        console.log(error)
    }
    console.log("Kia kia :" + msg)
})

//Apply loan for Ren Money
apply.apply(renMoney, loanForRenMoney, function (error, msg) {
    if (error) {
        console.log(error)
    }
})

let appliedUsers = apply.getAppliedUsers()
let users = appliedUsers.getUsers()
let kia = users[0]
let kiaLoan = kia.getLoans()
var loan = kiaLoan[0]

let kiaDetails = "Name : " + kia.getName() + "\nDescription : " + loan.getDescription() + "\nInterest rate : " + loan.getRate() + "\nAmount : " + loan.getAmount() + "\nTenure : " + loan.getTime()
console.log(kiaDetails)
console.log("\n")
let ren = users[1]
let renLoan = ren.getLoans()
loan = renLoan[0]
let renDetails = "Name : " + ren.getName() + "\nDescription : " + loan.getDescription() + "\nInterest rate : " + loan.getRate() + "\nAmount : " + loan.getAmount() + "\nTenure : " + loan.getTime()
console.log(renDetails)
