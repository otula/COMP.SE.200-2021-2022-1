import capitalize from '../capitalize';


describe('Capitalize', () => {
  describe('Input is a string', () => {
    it('Capitalizes a lowercase string', () => {
      expect(capitalize('edward')).toEqual('Edward')
    })
    it('Capitalizes an uppercase string', () => {
      expect(capitalize('EDWARD')).toEqual('Edward')
    })
    it('Capitalizes a string with mixed cases', () => {
      expect(capitalize('eDwArD')).toEqual('Edward')
    })
    it('Capitalizes a sentence', () => {
      expect(capitalize('edward REALLY likes apples!')).toEqual('Edward really likes apples!')
    })
    it('Capitalizes an empty string', () => {
      expect(capitalize(String())).toEqual('')
    })
  })

  describe('Input is not a string', () => {
    it('Input is a positive number', () => {
      expect(capitalize(100)).toEqual('100')
    })
    it('Input is a negative number', () => {
      expect(capitalize(-100)).toEqual('-100')
    })
    it('Input is null', () => {
      expect(capitalize(null)).toEqual('Null')
    })
    it('Input is undefined', () => {
      expect(capitalize(undefined)).toEqual('Undefined')
    })
    it('Input is an array', () => {
      const arr = ['apples', 'oranges', 'bananas']
      expect(capitalize(arr)).toEqual('Apples,oranges,bananas')
    })
    it('Input is an object', () => {
      const obj = {'router': 'gummy bear'}
      expect(capitalize(obj)).toEqual('[object object]')
    })
    it('Input is a boolean', () => {
      expect(capitalize(true)).toEqual('True')
    })
  })
});