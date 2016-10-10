var express = require('express');
var cookieParser = require('cookie-parser')

var app = express();
app.use(cookieParser())
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.send('Access public files!');
    console.log("Cookie: ", req.cookies)
})

var server = app.listen(8081, function () {
    var host = server.address().address

    console.log('Servidor em 127.0.0.1:8081')
})
