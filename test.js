var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    var responsePage = fs.readFileSync("index.html", "utf8")
    res.end(responsePage)
}).listen(8080)
