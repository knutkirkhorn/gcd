import test from 'ava';
import m from '.';

test('gcd for some numbers', t => {
    t.is(m(416, 86), 2);
    t.is(m(51, 91), 1);
    t.is(m(25, 5), 5);
});