import { stringUtils } from '../lib/index'

describe('string utilities', () => {
  test('toFirstUppercase', () => {
    expect(stringUtils.toFirstUppercase('hello world')).toEqual('Hello world')
    expect(stringUtils.toFirstUppercase('My name is Manuel')).toEqual('My name is Manuel')
  })

  test('prettifyPath', () => {
    expect(stringUtils.prettifyPath('m/developeengubf/wfaoizubffbfa/afhawbf.js.ts', '/')).toBe('m -> developeengubf -> wfaoizubffbfa -> afhawbf.js.ts')
    expect(stringUtils.prettifyPath('M//defiufu//AWFzauibfzubW//wfiuabfioabfuianhfia', '//')).toBe('M -> defiufu -> AWFzauibfzubW -> wfiuabfioabfuianhfia')
    expect(stringUtils.prettifyPath('M/walifuabnfA/dpwandad/FDLÖKFNALIUFA/DLJNAFLIFHB/DAJDAND', '/')).toBe('M -> walifuabnfA -> dpwandad -> FDLÖKFNALIUFA -> DLJNAFLIFHB -> DAJDAND')
    expect(stringUtils.prettifyPath('m\\awiufbfuihb\\aiouwfnaiuofniu\\aiuwfnauoifba\\ifunaifouifwubn', '\\')).toBe('m -> awiufbfuihb -> aiouwfnaiuofniu -> aiuwfnauoifba -> ifunaifouifwubn')
  })
})