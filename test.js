const test = require('ava');
const gcd = require('.');

test('gcd for some numbers', t => {
    t.is(gcd(416, 86), 2);
    t.is(gcd(51, 91), 1);
    t.is(gcd(25, 5), 5);
});
