var Types = require('./types');
var Card = Types.Card;
var Suit = Types.Suit;

function Deck() {
    this._cards = new Array(52);
    this.reset();
}

Deck.prototype.reset = function(){
    for (var s = 1; s <= 4; s++) {
        for (var p = 1; p <= 13; p++) {
            var card = new Card(p, s);
            this._cards[card.id] = card;
        }
    }
};

Deck.prototype.draw = function () {
    var cardIds = this._cardIds;
    var len = cardIds.length;
    if (len === 0) {
        return null;
    }

    var random = Math.random();
    var index = (random * len) | 0;
    var result = cardIds[index];

    // 保持数组紧凑
    var last = cardIds[len - 1];
    cardIds[index] = last;
    cardIds.length = len - 1;

    return result;
};

module.exports = Deck;