
$(function () {
	main();
});

function main() {
	var socket = io();
	$('form').submit(function(){
		socket.emit('chat message', $('#m').val());
		$('#m').val('');
		return false;
	});

	socket.on('newPlayer', function(player){
		$('#players').append($('<li>').text(player.pseudo));
		console.log("received: ", player);
	});
}

