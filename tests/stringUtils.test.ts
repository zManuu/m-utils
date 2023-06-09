import { stringUtils } from '../lib/index'

describe('string utilities', () => {
  test('toFirstUppercase', () => {
    expect(stringUtils.toFirstUppercase('hello world')).toEqual('Hello world')
    expect(stringUtils.toFirstUppercase('My name is Manuel')).toEqual('My name is Manuel')
  })
})