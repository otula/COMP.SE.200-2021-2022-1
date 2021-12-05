import slice from '../slice';

const arr = [0,1,2,3,4,5,6,7,8,9]

describe('Function slice', () => {
    it('should return whole array when only array is given', () => {
        expect(slice(arr)).toEqual(arr)
    })
    it('should return array without first two indexes when start point is 2', () => {
        expect(slice(arr,2)).toEqual([2,3,4,5,6,7,8,9])
    })
    it('should return empty array when empty array is given', () => {
        expect(slice([])).toEqual([])
    })
    it('should return array with last two indexes when start point is -2', () => {
        expect(slice(arr, -2)).toEqual([8,9])
    })
    it('should return array without last two indexes when length is -2', () => {
        expect(slice(arr, 0 ,-2)).toEqual([0,1,2,3,4,5,6,7])
    })
    it('should return empty array if nothing is given as parameter', () => {
        expect(slice()).toEqual([])
    })
    it('should start at start if negative start bigger than arr length', () => {
        expect(slice(arr, -12)).toEqual(arr)
    })
    it('should return empty array if end is before start', () => {
        expect(slice(arr, 4, 2)).toEqual([])
    })
})