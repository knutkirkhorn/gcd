# gcd [![Build Status](https://travis-ci.org/Knutakir/gcd.svg?branch=master)](https://travis-ci.org/Knutakir/gcd)
Get the greatest common devisor of two numbers

## Installation
```
$ npm install @knutkirkhorn/gcd
```

## Usage
```js
const gcd = require('@knutkirkhorn/gcd');

console.log(gcd(28, 2));
// => 2
```

## API
### gcd(number1, number2)
Returns the gcd(greatest common devisor) of ```number1``` and ```number2```.
The gcd is computed using the Euclidean algorithm.

## Related
- [@knutkirkhorn/gcd-cli](https://github.com/Knutakir/gcd-cli) - CLI for this module

## License
MIT © [Knut Kirkhorn](LICENSE)
