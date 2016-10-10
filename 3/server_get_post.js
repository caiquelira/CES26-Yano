var http = require('http');

http.createServer( function (req, res) {
    if (req.method == 'POST') {
	console.log('post');
	var body = [];
	res.write('That was a post!');
	req.on('error', function(err) {
	    console.error(err);
	}).on('data', function(chunk) {
	    body.push(chunk);
	}).on('end', function(){
	    body = Buffer.concat(body).toString();
	    console.log(body)
	    res.end('(' + body + ')');
	});
    }
    if (req.method == 'GET') {
	console.log('get');
	res.end('That was a get!');
    }

}).listen(8081);

console.log('Servidor em http://127.0.0.1:8081/');
