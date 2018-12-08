var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const Deck = require("./Deck.js");
const global_deck = new Deck();
const Player = require("./Player.js");

const players_by_id = {};
const players = [];

const next_id = (function() {
	let id = 0;
	return () => id++;
})();

let current_player;

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

const port = 8080;
http.listen(port, "0.0.0.0", function(){
	console.log('mille bornes : listening on port ', port);
});

io.on('connection', function(socket){
	// initialisation du joueur
	const id = next_id();
	const player = new Player(global_deck.take(6), socket, id);
	players_by_id[id] = player;
	players.push(player);
	console.log('a user connected');


	socket.emit("hello", {id, players:players.map(pl => [pl.id, pl.km]), hand:player.hand.map(c => c.name)});
	
	socket.on('play', function({cardindex, target}){
		if (current_player != player) return;
		io.emit('', msg);
		console.log('message: ' + msg);
	});
	
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});
