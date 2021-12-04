import toNumber from '../toNumber'

test('Test positive integers', () => {
    expect(toNumber(4)).toBe(4);
})

test('Test negative integers', () => {
    expect(toNumber(-4)).toBe(-4);
})

test('Test positive string integers', () => {
    expect(toNumber('4')).toBe(4);
})

test('Test negative string integers', () => {
    expect(toNumber('-4')).toBe(-4);
})

test('Test binary string', () => {
    expect(toNumber('0b0011')).toBe(3);
})

test('Test positive float', () => {
    expect(toNumber(4.6)).toBe(4.6);
})

test('Test negative float', () => {
    expect(toNumber(-4.6)).toBe(-4.6);
})

test('Test positive float string', () => {
    expect(toNumber('4.6')).toBe(4.6);
})

test('Test negative float string', () => {
    expect(toNumber('-4.6')).toBe(-4.6);
})

test('Test ocatl string', () => {
    expect(toNumber('0o01234')).toBe(668);
})

test('Test octal max string', () => {
    expect(toNumber('0o777777777777')).toBe(68719476735);
})

test('Test positive invalid hex string', () => {
    expect(toNumber('+0x29c')).toBe(NaN);
})

test('Test negative invalid hex string', () => {
    expect(toNumber('-0x29c')).toBe(NaN);
})

test('Test valid hex string', () => {
    expect(toNumber('0x29c')).toBe(668);
})

test('Test string', () => {
    expect(toNumber('-4.6ab')).toBe(NaN);
})

test('Test object', () => {
    expect(toNumber({valueOf: 123})).toBe(NaN);
})

test('Test object function', () => {
    expect(toNumber({valueOf: () => 1234})).toBe(1234);
})

test('Test object function', () => {
    expect(toNumber({valueOf: () => 0})).toBe(0);
})

function addOne(value){
    return value += 1;
}

test('Test function', () => {
    expect(toNumber(addOne)).toBe(NaN);
})

test('Test symbol', () => {
    expect(toNumber(Symbol(2))).toBe(NaN);
})

test('Test infinite', () => {
    expect(toNumber(Infinity)).toBe(Infinity);
})

test('Test false boolean', () => {
    expect(toNumber(false)).toBe(0);
})

test('Test true boolean', () => {
    expect(toNumber(true)).toBe(1);
})

test('Test without parameter', () => {
    expect(toNumber()).toBe(NaN);
})

test('Test null', () => {
    expect(toNumber(null)).toBe(0);
})

test('Test NaN', () => {
    expect(toNumber(NaN)).toBe(NaN);
})

test('Test string with whitespace', () => {
    expect(toNumber('    46  ')).toBe(46);
})

test('Test binary string with whitespace', () => {
    expect(toNumber('    0b110101  ')).toBe(53);
})