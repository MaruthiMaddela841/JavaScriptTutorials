//Closure
function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log(`Outer Variable::${outerVariable}`)
        console.log(`Inner Variable::${innerVariable}`)
    }
}
var newFunction=outerFunction("Outside");
new newFunction("Inside");