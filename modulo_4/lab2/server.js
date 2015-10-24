var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {
		"Content-Type": "text/plain"
	});

	res.end("Hello Unipiloto APM-3\n");
});

server.listen(3333);