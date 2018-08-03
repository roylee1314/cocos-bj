'use strict'

var print = console.log

var StateMachine = require('./fsm')

var Deck = require('./deck')

var Timer = require('./timer')


function GamePlayer(id, chips) {
    this.id = id;
    this.chips = chips;
    this.cards = new Array(9);

}









function Game (lasttime, ante){

    this.lasttime = lasttime;
    this.ante = ante;
    this.deck = new Deck();
    this.players = [null, null, null, null, null]
    this.offplayers = {};
    this._fsm();
    this.timer = new Timer();
    


}

Game.prototype.getPlayerNumbers = function() {
    count = 0;
    for(var i in this.players){
        if this.players[i] != null:
            count += 1;
    }
    return count;
};

Game.prototype.addPlayer = function(id, chips, pos) {
    if (pos < 0 || pos >= 5 || this.players[pos] == null) {
        return false;
    }
    this.players[pos] = new GamePlayer(id, chips);


};

Game.prototype.playerLeave = function(id){
    var found = false;
    for(var i in this.players) {
        if (this.players[i] == id){
            this.offplayers[id] = this.players[i];
            this.players[i] = null;
            found = true;
            break;
        }

    }
    return found;
};




Game.prototype.onInit = function(){
    



};


Game.prototype.onReady = function()
{
    this.deck.reset();
    if (this.getPlayerNumbers() > 1){
        this.start();
    }
    
    
};




Game.prototype.onPending = function()
{
    for(var i = 0; i < 9; i ++ )
    {
        for (j in this.players){
            if this.players != null{
                this.players.addCard(this.deck.draw());
            }
        }
    }


};

Game.prototype.C



Game.prototype.onCheck = function()
{
    for(i = 0; i < 3; i ++){
        
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
