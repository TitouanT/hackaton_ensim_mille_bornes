
function Card(type, name, value) {
	this.name = name;
	this.type = type;
	this.value = value;

	if (this.type == "Attaque") {
		this.apply = function (player, target) {
			if (player == target) return false;
			if (target.protectedAgainst(this)) return false;
			player.removeFromHand(this);
			target.addMalus(this);
			return true;
		}
	} else if (this.type == "Defense") {
		this.apply = function (player, target) {
			if (player != target) return false;
			if (!player.tryProtectWith(this)) return false;
			player.removeFromHand(this);
			player.backToDeck(this);
			return true;
		}
	} else if (this.type == "Botte") {
		this.apply = function (player, target) {
			if (player != target) return false;
			player.removeFromHand(this);
			player.addBonus(this);
			return true;
		}
	} else if (this.type == "Distance") {
		this.apply = function (player, target) {
			if (player != target) return false;
			if (player.move(this.value)) {
				player.removeFromHand(this);
				player.backToDeck(this);
				return true;
			}
			return false;
		}
	}
}

module.exports = Card;
