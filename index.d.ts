/**
Get the [greatest common devisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) of two numbers
@param number1 - First number.
@param number2 - Second number.
@returns The gcd of `number1` and `number2`.
@example
```
const gcd = require('@knutkirkhorn/gcd');

console.log(gcd(28, 2));
// => 2
```
*/
declare function gcd(number1: number, number2: number): number;

export = gcd;
