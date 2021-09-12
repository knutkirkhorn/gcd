# gcd
> Get the [greatest common devisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) of two numbers

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
Returns the gcd of ```number1``` and ```number2```.
The gcd is computed using the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm).

## Related
- [@knutkirkhorn/gcd-cli](https://github.com/knutkirkhorn/gcd-cli) - CLI for this module

## License
MIT © [Knut Kirkhorn](LICENSE)
