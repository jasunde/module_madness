var http = require('http')

var account = require('./account')

http.createServer(function (req, res) {
  res.writeHead(200)
  res.write(account.message() + account.balance() + '\n')
  res.end()
}).listen(3000)

console.log('Listening on port 3000...')
