import {expectType} from 'tsd';
import gcd from './index.js';

expectType<number>(gcd(416, 86));
expectType<number>(gcd(51, 91));
expectType<number>(gcd(25, 5));
