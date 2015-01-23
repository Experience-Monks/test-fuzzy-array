var almost = require('array-almost-equal')
var FLT_EPSILON = require('almost-equal').FLT_EPSILON

module.exports = function roughly(t, epsilon, relativeTolerance) {
    if (typeof epsilon !== 'number')
        epsilon = FLT_EPSILON

    function compare(bool, value, expected, msg) {
        msg = msg || 'should '+(bool?'':'not')+' be almost equivalent'
        return almost(value, expected, epsilon, relativeTolerance) === bool
            ? t.ok(true, msg) 
            : t.equal(fuzz(value, epsilon), expected, msg)
    }

    var fuzzyEqual = compare.bind(null, true)
    fuzzyEqual.not = compare.bind(null, false)
    return fuzzyEqual
}

function fuzz(array, eps) {
    var m = 1 / eps
    return Array.prototype.slice.call(array).map(function(e) {
        if (typeof e === 'number') 
            return Math.round(e * m) / m
        else
            return e
    })
}