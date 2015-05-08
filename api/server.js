var http = require('http');
var bts = require('bootstruct');
var app = bts.start('app');

http.createServer(app).listen(1001, '127.0.0.1');
console.log('Listening on port 1001');