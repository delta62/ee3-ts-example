"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eventemitter3_1 = require("eventemitter3");
function pubsub(eventCount) {
    var emitter = new eventemitter3_1.EventEmitter();
    emitter.on('myEvent', function () {
        console.log('An event happened!');
    });
    for (var i = 0; i < eventCount; i += 1) {
        emitter.emit('myEvent');
    }
}
pubsub(3);
