const Card = require("./Card.js");
const template = [
	{
		type: "Attaque",
		cards: [
			{ qtt: 3, name: "Accident de la route ", value: 1},
			{ qtt:3, name: "Panne d essence", value: 2},
			{ qtt:3, name: "Crevaison", value:3},
			{ qtt:3, name: "Limitation de vitsse", value: 4},
			{ qtt:3, name: "Feu rouge", value: 5},
		]
	},

	{
		type: "Defense",
		cards: [
			{ qtt: 6, name: "Reparation", value:1},
			{ qtt:6, name: "Essence", value: 2},
			{ qtt:6, name: "Roue de secours", value:3},
			{ qtt:6, name: "Fin delimitation de vitesse", vlue: 4},
			{ qtt:14, name: "Feu vert", value :5},
		]
	},

	{
		type: "Botte",
		cards: [
			{ qtt: 1, name: "As du volant", value : 1},
			{ qtt:1, name: "Camion-citerne", value: 2},
			{ qtt:1, name: "Increvable", value : 3},
			{ qtt:1, name: "Prioritaire", value : 4},
		]

	},

	{
		type: "Distance",
		cards: [
			{ qtt: 10, value: 25},
			{ qtt:10, value: 50},
			{ qtt:10, value : 75},
			{ qtt:12, value : 100},
			{ qtt:4, value : 200},
		]


	}


]


function Deck() {
	this.cards = [];
	for (ens of template) {
		let type = ens.type;
		for (groupe of ens.cards) {
			for (let i = 0; i < grocups.qtt; i++) {
				cards.push(new Card(type, groupe.name, groupe.value));
			}
		}
	}
	this.shuffle = function () {
		for (let i= this.cards.length - 1; i > 0; i--){
			let j = Math.floor(Math.random()* (i+1));
			let temp = this.cards[i];
			this.cards[i] = this.cards[j];
			this.cards[j] = temp;
		}
	};

	this.add = function(card) {
		this.cards.unshift(card);
	};
	this.take = function() {
		return this.cards.pop();
	}
	this.shuffle();


}

module.exports = Deck;
