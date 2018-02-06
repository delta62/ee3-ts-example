import EventEmitter from 'eventemitter3'

const emitter = new EventEmitter()
emitter.on('some-event', () => console.log('default imports work!'))
emitter.emit('some-event')
