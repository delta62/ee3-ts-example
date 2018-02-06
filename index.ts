import { EventEmitter } from 'eventemitter3'

function pubsub(eventCount: number) {
  const emitter = new EventEmitter()

  emitter.on('myEvent', () => {
    console.log('An event happened!')
  })

  for (let i = 0; i < eventCount; i +=1) {
    emitter.emit('myEvent')
  }
}

pubsub(3)
