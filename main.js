var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

const port = 8080;
http.listen(port, "0.0.0.0", function(){
	console.log('mille bornes : listening on port ', port);
});

io.on('connection', function(socket){
	console.log('a user connected');
	
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
		console.log('message: ' + msg);
	});
	
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});
