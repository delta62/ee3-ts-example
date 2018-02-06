import { EventEmitter } from 'eventemitter3'

const emitter = new EventEmitter()
emitter.on('some-event', () => console.log('named exports work!'))
emitter.emit('some-event')
