import words from '../words';

test('Test string without pattern', () => {
    expect(words("String with, and. too")).toStrictEqual(["String", "with", "and", "too"]);
})

test('Test string with pattern', () => {
    expect(words("String with,& too",/[^, ]+/g)).toStrictEqual(["String", "with", "&", "too"]);
})

test('Test asciiWords match words', () => {
    expect(words('Aa Bb')).toStrictEqual(['Aa', 'Bb']);
})

test('Test empty', () => {
    expect(words('')).toStrictEqual([]);
})

test('Test empty with pattern', () => {
    expect(words('', /[^, ]+/g)).toStrictEqual([]);
})

test('Test with found string pattern', () => {
    expect(words('test other', 'other')).toStrictEqual(['other']);
})

test('Test with unfound string pattern', () => {
    expect(words('test other', 'nomatch')).toStrictEqual([]);
})

test('Test with wrong string parameter', () => {
    expect(() => words(6)).toThrow();
})

test('Test with wrong pattern parameter', () => {
    expect(() => words('test string', 6)).toThrow();
})