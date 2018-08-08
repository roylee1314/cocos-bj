'use strict'

var print = console.log

var StateMachine = require('./fsm')

var Deck = require('./deck')

var Timer = require('./timer')
var BJRule = require('./bj-rule')


function GamePlayer(id, chips) {
    this.id = id;
    this.chips = chips;
    this.cards = new Array(9);

}

GamePlayer.prototype.addCard = function(card){
    card.id = this.id
    this.cards.push(card)
};


GamePlayer.prototype.submit = fucntion(array){
    var i = 0;
    cards = new Array(9);
    for (var j in array)
    {
        cards[i++] = this.cards[j];
    }
    this.cards = cards;
}






function Game (totalTime, ante, moreRules){

    this.totalTime = totalTime;
    this.ante = ante;
    this.deck = new Deck();
    this.players = [null, null, null, null, null]
    this.offplayers = {};
    this._fsm();
    this.timer = new Timer();
    this.playerNum = 0;
    this.rule = new BJRule(moreRules);
    


}



Game.prototype.addPlayer = function(id, chips, pos) {
    if (pos < 0 || pos >= 5 || this.players[pos] != null) {
        return false;
    }
    this.players[pos] = new GamePlayer(id, chips);
    this.playerNum += 1

};

Game.prototype.removePlayer = function(id){
    var found = false;
    for(var i in this.players) {
        if (this.players[i] == id){
            this.offplayers[id] = this.players[i];
            this.players[i] = null;
            found = true;
            this.playerNum -= 1
            break;
        }

    }
    return found;
};

Game.prototype.getPlayer(id){
    for(var i in this.players){
        if (this.players[i].id == id)
        {
            return this.players[i];
        }
    }
    if (this.offplayers.has(id)){
        return this.offplayers[id];
    }
    return null;
}



Game.prototype.onReady = function()
{
    this.deck.reset();
    if (this.playerNum  > 1){
        this.start();
    }
    
    
};




Game.prototype.onPending = function()
{
    for(var i = 0; i < 9; i ++ )
    {
        for (var j in this.players){
            if this.players[j] != null{
                this.players[j].addCard(this.deck.draw());
            }
        }
    }

};


Game.prototype.onCheck = function()
{
    for(i = 0; i < 3; i ++){
        array = [];
        for (var j in this.players){
            if (this.players[j] != null) array.push(this.players.cards[i * 3: i * 3 + 3]);
        }
        array.sort(this.rule.compareTwoJinHua);
        number = array.length;
        for(var i = 0; i < array.length - 1; i ++){
            player = this.getPlayer(array[i][0].id);
            if player:
                player.chips -= (number - 1) * this.ante;
        }
        player = this.getPlayer(array[array.length - 1].id);
        if player:
            player.chips += (array.length - 1) * this.ante;

    }
}


StateMachine.factory(Game,

    {

        init: 'ready',
        transitions: 
            [
                {name: 'start', from: 'ready', to: 'pending'},
                {name: 'settle', from: 'pending', to: 'check'},
                {name: 'over', from:''}
            ],
        
    });

 

var fsm = new Game();
fsm.start();
