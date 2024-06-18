function init(){
    var firstName="Maruthi";
    console.log("Inside init()")
    function sayFirstName(){
        console.log(firstName);
    }
    //sayFirstName();
    return sayFirstName;
}

var value=init();
console.log(value.firstName);
value();

function doAddition(x){
    return function(y){
        return x+y;
    }
}

var add5=doAddition(4);
console.log(add5(5));
console.log(doAddition(5)(5));//curring or closure