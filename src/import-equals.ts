import EventEmitter = require('eventemitter3')

const emitter = new EventEmitter()
emitter.on('some-event', () => console.log('import= works!'))
emitter.emit('some-event')
