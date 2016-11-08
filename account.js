var random = require('./randomNumber')
var toUSD = require('./toUSD')

function balance() {
  return toUSD(random(100, 1000000))
}

function message() {
  return "Account balance: \n"
}

module.exports.balance = balance
module.exports.message = message
