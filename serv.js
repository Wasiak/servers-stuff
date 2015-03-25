var http = require('http');
var kuba = {
	'name' : 'Kuba',
	'age' : '25',
	'city' : 'Warsaw'
}

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*'});
  res.end(JSON.stringify(kuba));
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');