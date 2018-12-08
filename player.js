

function Player (hand){
	 this.hand = hand;
	 this.malus = [];
	 this.botte = [];

}


Player.prototype.play(indice, target){
	if(target == undefined){
		target = this;
	}
	return this.hand[indice].apply(this);



}

Player.prototype.protectedAgainst(attack){

	for(botte of this.botte){
		if (botte.value == attack.value){
			return true;
		}
	}
	return false;
}


Player.prototype.removeFromHand(card){

	let index = this.hand.indexOf(card);
	if(index == -1){
		return false;
	}

	this.hand.splice(index, 1);
	return true;
	}

Player.prototype.addMalus(malus){

	this.malus.push(malus);


}

Player.prototype.tryProtecWith(defense){

	for(let i = 0; i< this.malus.length; i++){
		let attack = this.malus[i];
		if(defense.value == attack.value){

				this.malus.splice(i, 1);
				this.backToDeck(attack);
				return true;
		}
	}

	return false;
}

Player.prototype.addBonus(bonus){

	this.bonus.push(bonus);
}

Player.prototype.backToDeck(card){


}






module.exports = Player;
