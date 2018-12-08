const template = [
	{
		type: "Attaques",
		cards: [
			{qtt: 3, name: "Accident de la route ", nemesis: ["Repartion", "As du volant"] },
			{ qtt:3, name: "Panne d essence", nemesis: ["Essence", "Camion-citene"]},
			{ qtt:3, name: "Crevaison", nemesis:["Roue de secours", "Increvable"]},
			{ qtt:3, name: "Limitation de vitsse", nemesis: ["Fin de limitationde vitesse", "Prioritaire"]},
			{ qtt:3, name: "Feu rouge", nemesis: ["Feu vert"]},
		]
		},

		{
			type: "Defense",
			cards: [
				{qtt: 6, name: "Reparation"},
				{ qtt:6, name: "Essence"},
				{ qtt:6, name: "Roue de secours"},
				{ qtt:6, name: "Fin delimitation de vitesse"},
				{ qtt:14, name: "Feu vert"},
			]
			},

			{
				type: "Bottes",
				cards: [
					{qtt: 1, name: "As du volant"},
					{ qtt:1, name: "Camion-citerne"},
					{ qtt:1, name: "Increvable"},
					{ qtt:1, name: "Prioritaire"},
				]

				},

				{
					type: "Distance",
					cards: [
						{qtt: 10, name: "Escargot"},
						{ qtt:10, name: "Canard"},
						{ qtt:10, name: "Papillon"},
						{ qtt:12, name: "Lièvre"},
						{ qtt:4, name: "Hirondelle"},
					]


					}


		]


function Deck() {
	this.cards = []
for (ens of template) {
	let type = ens.type;
	for (groupe of ens.cards) {
		for (i = 0; i < grocups.qtt; i++) {
			this.cards.push(new Card(type, groupe.nam))
		}
	}
}

}
