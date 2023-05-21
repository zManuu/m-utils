import { eventEmitter } from '../lib/index'

describe('eventEmitter', () => {

  const eventMap = {
    test: {
      foo: eventEmitter.v<string>(),
      bar: eventEmitter.v<number>()
    }
  }

  let emitter: eventEmitter.EventEmitter<typeof eventMap>

  test('setup', () => {
    emitter = new eventEmitter.EventEmitter()
    expect(emitter).toBeDefined()
  })

  test('setting up listeners', () => {
    emitter.on('test', args => {
      expect(args).toBeDefined()
      expect(args).toHaveProperty('foo')
      expect(args).toHaveProperty('bar')
    })
  })

  test('emitting', () => {
    emitter.emit('test', { foo: '123', bar: 123 })
  })

})