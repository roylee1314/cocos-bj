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
    array.sort().reverse();
    

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
    var i = 0;
    while (i < suits.length) {
        if (suits[i].length > 3){
            array = {}
            for(var j in suits[i]){
                card = nineCards[suits[i][j]];
                array.push(card);
            }
           
            for(var j = 13; j >= 0; j--){
                for(var k in )
            }
        }


    }



    // find trip
    // var i = 0;
    // while(i < nineCards.length)
    // {
    //     if(nineCards[i] == null){
    //         i++;
    //         continue;
    //     }
    //     var card = nineCards[i];
    //     var count = 0;
    //     j = i + 1;
    //     while (j < nineCards.length){
    //         if (nineCards[j] != null && nineCards[j].point == card.point){
    //             j ++;
    //         }
    //         else{
    //             break;
    //         }
    //     }
    //     if (count >= 3){
    //         for (c = 0; c < 3; c++){
    //             cards[pos++] = nineCards[i];
    //             nineCards[i++] = null;
    //         }
            
    //     }else{
    //         i = j;
    //     }

    // }

    //find


}








// function ThreeCards(cards){
//     this.cards = cards;
//     this.cardType = null;
    
// }



