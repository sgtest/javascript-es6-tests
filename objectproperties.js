(function() {
function quux() {
	return 1;
}

// method properties
var obj1 = {
    foo (a, b) {
    },
    bar (x, y) {
    },
    *quux (x, y) {
    }
};

// computed property names
var obj2 = {
    foo: "bar",
    [ "baz" + quux() ]: 42
};

var propX = 'a';
var propY = 'b';

// property shorthand
var obj3 = { propX, propY };
