function tipper(a){
    var bill=parseInt(a);
    console.log(bill+5);
}
tipper("5");

// biggerTipper("5");
// var biggerTipper=function(a){
//     var bill=parseInt(a);
//     console.log(bill+5);
// }

console.log(name);
var name="Maru";
function sayName(){
    var name="Maddela";
    console.log(name);
}
sayName();
console.log(name);

//console.log(number)
let number=5;
console.log(number)

var text="outside"
function logIt(){
    var text;
    console.log(text)
    var text="inside"
}
logIt();