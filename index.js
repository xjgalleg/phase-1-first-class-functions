function receivesAFunction(spy, callback) {
    console.log(spy());
}
receivesAFunction(function() { return "receives a function and calls it"});

function returnsANamedFunction(fn) {
    return fn = returnsANamedFunction
}

function returnsAnAnonymousFunction(fn) {
    return (function(){})
}