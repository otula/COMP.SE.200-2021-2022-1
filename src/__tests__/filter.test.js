import filter from '../filter'

const intArray = [1,2,3,4,5,6,7,8,9]
const stringArray = ['cat', 'dog', 'moose', 'axolotl']

describe('filter function', () => {
    it('should return array with size of one when filter matches exact string', () => {
        expect(filter(stringArray, s => s=='cat')).toEqual(['cat'])
    })
    it('should return array in array when null is given as parameter', () => {
        expect(filter(null)).toEqual([[]])
    })
    it('should return array in array when no parameter is given', () => {
        expect(filter(null)).toEqual([[]])
    })
    it('should throw error when array is given as parameter but no function parameter is given as predicate', () => {
        expect(() => filter([[]])).toThrow()
    })
    it('should throw error when array is given as parameter and integer is given as predicate', () => {
        expect(() => filter([[]], 1)).toThrow()
    })
})