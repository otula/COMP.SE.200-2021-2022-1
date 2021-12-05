import compact from '../compact';

test('Test with boolean, integer, empty string, null, undefined and NaN', () => {
    expect(compact([0, 1, false, 2, '', 3, undefined, null, NaN])).toBe([1, 2, 3]);
})

test('Test with boolean, integer and string', () => {
    expect(compact([0, 1, false, 2, 'string', 3])).toBe([1, 2, 'string', 3]);
})

test('Test with objects', () => {
    expect(compact([false, null, {value: 1}, {value: null}])).toBe([{value: 1}, {value: null}]);
})