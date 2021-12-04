import at from '../at';

test('Test multiple paths', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    expect(at(object, ['a[0].b.c', 'a[1]'])).toStrictEqual([3, 4]);
})

test('Test single path', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    expect(at(object, 'a[0].b.c')).toStrictEqual([3]);
})