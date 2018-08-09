var Types = require('./types');
var Card = Types.Card;


var CardType = {
    INVALID: 1,
    HIGH_CARD: 2,
    PAIR: 3,
    STRAIGHT_A23: 4,
    STRAIGHT: 5,
    FLUSH: 6,
    FLUSH_A23: 7,
    STRAIGHT_FLUSH: 8,
    TRIP: 9,
};


function isValid(cards){
     
}

function getCardsType(cards){
    if(!isValid(cards)){
        return CardType.INVALID;
    }

    array = [cards[0].point, cards[1].point, cards[2].point];
    array.sort().reverse();
    

    if (array[0] == array[1] == array[2]){
        return CardType.TRIP;
    }   
    if(cards[0].suit == cards[1].suit == cards[2].suit){
        if(array[0] == 13 && array[1] == 2 && array[2] == 1){
            return CardType.FLUSH_A23;
        }


        if (array[0] == array[1] + 1 == array[2] + 2){
            return CardType.STRAIGHT_FLUSH;
        }
        else{
            return CardType.FLUSH;
        }
    }
    if(array[0] == 13 && array[1] == 2 && array[2] == 1){
            return CardType.STRAIGHT_A23;
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

    else
    {
        for (i = 0; i < c1.length; i++){
            if (c1[i].point != c2[i].point){
                return c1[i].point - c2[i].point;
            }
        }
        for (i = 0; i < c1.length; i++){
            if (c1[i].suit != c2[i].suit){
                return c1[i].suit - c2[i].suit;
            }
        }
    }
    
    



}

function bjAI(nineCards){
    var cards = new Array(9);
    var cur = 0;


    // any trip?
    nineCards = nineCards.sort(function(c0, c1){
        if (c0.point != c0.point){
            return c0.point - c1.point;
        }
        
        return c0.suit - c1.suit;
    });

    var pos = 0;

    points = new Array(14).fill({});
    suits = new Array(5).fill({});
    for (var i = 0; i < nineCards.length; i++) {
        points[nineCards[i].point].add(i);
        suits[nineCards[i].suit].add(i);
    };

    // trip
    for (var i = points.length - 1; i >= 0; i--) {
        if (points[i].length > 3){
            for(var j in points[i]){
                card = nineCards[points[i][j]];
                if (suits[card.suit].length == 3){
                    point[i].delete(points[i][j]);
                    break;
                }
            }
        }
        if (points[i].length == 3){
            for(var j in points[i]){
                card = nineCards[points[i][j]];
                cards[pos++] = card;
                suits[card.suit].delete(points[i][j]); 
            }
        }

    };

    // flush straight
    
    for(i = 0; i < suits.length; i++){
        if (suits[i].length >= 3){
            pdict = new Map();
            for(var j in suits[i]){
                card = nineCards[suits[i][j]];
                pdict[card.point] = card;
            }
            var p = 13;
            while (p > 1){
                if (pdict.has(p) && pdict.has(p - 1) && pdict.has(p - 2)){
                    cards[pos++] = pdict[p];
                    cards[pos++] = pdict[p - 1];
                    cards[pos++] = pdict[p - 2];
                    p -= 3;
                    pdict.delete(p);
                    pdictpdict.delete(p - 1);
                    pdict.delete(p - 2);
                }
                else{
                    p -= 1;
                }
            }
            // check A23
            if (pdict.has(13) && (!pdict.has(12) or !pdict.has(11))
                && pdict.has(1) && pdict.has(2)){
                pdict[pos++] = pdict[3];
                pdict[pos++] = pdict[2];
                pdict[pos++] = pdict[13];
            }    
            
        }



    }



    


}








// function ThreeCards(cards){
//     this.cards = cards;
//     this.cardType = null;
    
// }



