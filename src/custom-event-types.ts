import { EventEmitter } from 'eventemitter3'

// Generics using strings
const stringEmitter = new EventEmitter<string>()
stringEmitter.on('someString', () => console.log('string subclass works!'))
stringEmitter.emit('someString')

// Generics using symbols
const sym = Symbol('Some Symbol')
const symbolEmitter = new EventEmitter<symbol>()
symbolEmitter.on(sym, () => console.log('symbol subclass works!'))
symbolEmitter.emit(sym)

type StringType = "foo" | "bar" | "baz"

// Generics using a custom string type
const stringTypeEmitter = new EventEmitter<StringType>()
stringTypeEmitter.on('foo', () => console.log('string type emitter works!'))
stringTypeEmitter.emit('foo')

// A subclass of EventEmitter that uses a custom string type
class StringTypeEmitter extends EventEmitter<StringType> { }
const subclassEmitter = new StringTypeEmitter()
subclassEmitter.on('foo', () => console.log('subclass with custom event types works!'))
subclassEmitter.emit('foo')
