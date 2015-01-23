var Fuzzy = require('./')
var test = require('tape')

test('compares arrays with an epislon', function(t) {
    var stub = {
        deepEqual: function(a, b, msg) {
            t.deepEqual(a, b, msg)
        },
        ok: function(a, msg) {
            t.ok(a, msg)
        }
    }

    var a = [0, 1, 1+1e-12]
    var b = [0, 1, 1]

    var almostEqual1 = Fuzzy(stub)
    almostEqual1(a, b)
    almostEqual1.not(a, [0, 1, 1+1e-4])

    var almostEqual2 = Fuzzy(stub, 0.1)
    almostEqual2(a, [0, 1, 1.001], 'accepts custom epsilon')
    almostEqual2.not(a, [0, 1, 1.3], 'negate w/ custom epsilon')
    t.end()
})