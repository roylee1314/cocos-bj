'use strict'

var print = console.log

var StateMachine = require('./fsm')

var Deck = require('./deck')

function GameFSM (){

    this.deck = new Deck();
    this.players = new Set();
    this._fsm();


}

GameFSM.prototype.onReady = function()
{
    this.deck.reset();
    
}


GameFS


GameFSM.prototype.onPending = function()
{
    print('onPending')
}




GameFSM.prototype.onCheck = function()
{

}


StateMachine.factory(GameFSM,

    {

        init: 'ready',
        transitions: 
            [
                {name: 'start', from: 'ready', to: 'pending'},
                {name: 'settle', from: 'pending', to: 'check'},
            ],
        
    });



var fsm = new GameFSM();
fsm.start();
