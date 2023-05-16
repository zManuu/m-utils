import { logger } from '../lib/index'

describe('Logger', () => {

  const l = new logger.Logger()
  
  test('creation', () => {
    expect(l.history).toStrictEqual([])
    expect(l.history).toBeInstanceOf(Array)
    expect(l.config.active).toBe(true)
  })

})