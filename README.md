# test-fuzzy-array

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A tap/tape utility to compare arrays with an epislon value. Defaults to float epsilon, and provides clear logging on test pass/failure. 

```js
var test = require('tape')
var Fuzz = require('test-fuzzy-array')

test('compares arrays with an epislon', function(t) {
    var epsilon = 0.01
    var almostEqual = Fuzz(t, epsilon)

    almostEqual(['foo', 1, 0.0025], ['foo', 1, 0.0026])
    t.end()
})
```

Result:  
![img](http://i.imgur.com/MHbUQom.png)

## Usage

[![NPM](https://nodei.co/npm/test-fuzzy-array.png)](https://www.npmjs.com/package/test-fuzzy-array)

#### `almostEqual = Fuzz(t[, epsilon[, relativeTolerance]])`

Returns an `almostEqual` function that operates on the given `test` instance of [tape](https://www.npmjs.com/package/tape), [tap](https://www.npmjs.com/package/tap) and similar interfaces. Epsilon defaults to float precision. Relative tolerance defaults to epsilon value. 

The function has the signature:

```js
almostEqual(value, expected, msg)
``` 

#### `notAlmostEqual = almostEqual.not`

The return value of Fuzz has a `not` function which is the negated version.

Examples:

```js
var Fuzzy = require('test-fuzzy-array')

test('arrays are almost equal', function(t) {
    var almostEqual = Fuzzy(t)
    var notAlmostEqual = almostEqual.not
    
    almostEqual(['foo', 1, 1], ['foo', 1, 1 + 1e-12])
    notAlmostEqual([], ['foo', 1, 0.0026])
    t.end()
})
```

## License

MIT, see [LICENSE.md](http://github.com/Jam3/test-fuzzy-array/blob/master/LICENSE.md) for details.
