var Types = require('./types');
var Card = Types.Card;


var CardType = {
    INVALID: 1,
    HIGH_CARD: 2,
    PAIR: 3,
    STRAIGHT: 4,
    FLUSH: 5,
    STRAIGHT_FLUSH: 6,
    TRIP: 7,
};


function isValid(cards){
    
}

function getCardsType(cards){
    if(!isValid(cards)){
        return CardType.INVALID;
    }

    array = [cards[0].point, cards[1].point, cards[2].point];
    array.sort();
    array.reverse();

    if (array[0] == array[1] == array[2]){
        return CardType.TRIP;
    }   
    if(cards[0].suit == cards[1].suit == cards[2].suit){
        
        if (array[0] == array[1] + 1 == array[2] + 2){
            return CardType.STRAIGHT_FLUSH;
        }
        else{
            return CardType.FLUSH;
        }
    }
    
    if (array[0] == array[1] + 1 == array[2] + 2){
        return CardType.STRAIGHT;
    }
    if (array[0] == array[1] || array[0] == array[2] || array[1] == array[2]){
        return CardType.PAIR;
    }
    return CardType.HIGH_CARD;
}

function compareTwoJinHua(c1, c2){
    var t1 = getCardsType(c1);
    var t2 = getCardsType(c2);
    if (t1 != t2){
        return t1 < t2;
    }
    

    function cmp(c1, c2){
        if (c1.point != c2.point){
            return c1.point - c2.point;
        }
        return c1.suit - c2.suit;
    }
    c1.sort(cmp).reverse();
    c2.sort(cmp).reverse();

    
    function findPair(cards){
        if (cards[0].point == cards[1].point){
            return cards[0].point, cards[2].point;
        }
        else if (cards[0].point == cards[2].point) {
            return cards[0].point, cards[1].point;
        }
        else{
            return cards[1].point, cards[0].point;
        }
    }


    if (t1 == CardType.TRIP || t1 == CardType.STRAIGHT || t1 == CardType.HIGH_CARD)
    {
        for (i = 0; i < c1.length; i++){
            if (c1[i].point != c2[i].point){
                return c1[i] - c2[i]
            }
        }
        for (i = 0; i < c1.length; i++){
            if (c1[i].suit != c2[i].suit){
                return c1[i] - c2[i]
            }
        }
    }
    if (t1 == CardType.STRAIGHT_FLUSH || t1 == CardType.FLUSH){
        if (c1[0].point != c2[0].point){
            return c1[0].point - c2.point;
        }
        return c1[0].suit - c2[0].suit;
    }
    if (t1 == CardType.PAIR){
        var pair1, high1 = getPair(c1);
        var pair2, high2 = getPair(c2);
        if (pari1 == prai2){
            return high1 - high2;
        }
        else{
            return pair1 - pair2;
        }
    }



}

card0 = [{point:1,suit:1},{point:2,suit:1},{}]
card1 = [{},{},{}]