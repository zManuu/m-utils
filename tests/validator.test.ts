import { validator } from '../lib/index'

describe('validator', () => {

  test('email', () => {
    expect(validator.email('manuel.rettkowski@gmail.com')).toBe(true)
    expect(validator.email('manuel-.-.@@gmail.com')).toBe(false)
    expect(validator.email('manuel.rettkowski@gmail')).toBe(false)
    expect(validator.email('manuel.rettkowskigmail.com')).toBe(false)
  })

  test('name', () => {
    expect(validator.name('Manuel Rettkowski')).toBe(true)
    expect(validator.name('Manuel.Rettkowski')).toBe(false)
    expect(validator.name('M A')).toBe(false)
    expect(validator.name('MR')).toBe(false)
    expect(validator.name('M-! A')).toBe(false)
  })

  test('password', () => {
    expect(validator.password('AAuu11--')).toBe(false)
    expect(validator.password('AAAuuu111---')).toBe(true)
  })

  test('number', () => {
    expect(validator.number('123')).toBe(true)
    expect(validator.number('123.1')).toBe(false)
    expect(validator.number('123.2', true)).toBe(true)
    expect(validator.number('abc')).toBe(false)
  })

})