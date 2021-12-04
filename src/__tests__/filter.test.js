import filter from '../filter'

const intArray = [1,2,3,4,5,6,7,8,9]
const stringArray = ['cat', 'dog', 'moose', 'axolotl']

describe('filter function', () => {
    it('should return array with size of one when filter matches exact string', () => {
        expect(filter(stringArray, s => s=='cat')).toEqual(['cat'])
    })
})