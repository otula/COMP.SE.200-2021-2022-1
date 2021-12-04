import words from '../words';

test('Test string without pattern', () => {
    expect(words("String with, and. too")).toStrictEqual(["String", "with", "and", "too"]);
})

test('Test string with pattern', () => {
    expect(words("String with,& too",/[^, ]+/g)).toStrictEqual(["String", "with", "&", "too"]);
})