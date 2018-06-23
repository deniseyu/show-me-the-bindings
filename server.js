var http = require('http');
var url = require('url');

HOST = null;

var host = "0.0.0.0";
var port = process.env.PORT || 3000;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Here is my VCAP_SERVICES object: ');
    res.write(process.env.VCAP_SERVICES);
    res.end();
}).listen(port, null);

console.log('Server running at http://' + host + ':' + port + '/');
