import { EventEmitter } from 'eventemitter3'

export class MyEmitter extends EventEmitter {
  constructor() {
    super()
    console.log('I extend EventEmitter!', this)
  }
}

new MyEmitter()
