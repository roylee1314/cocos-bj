'use strict'

var print = console.log

var StateMachine = require('./fsm')


var fsm = new StateMachine(
    {

        init: 'ready',
        transitions: [
        {name: 'start', from: 'ready', to: 'pending'},
        {name: 'settle', from: 'pending', to: 'checkout'},

        ]
});