var returnedValue=Math.max(1,2,3,4);
//console.log(returnedValue);
var myObj={};
Object.assign(myObj,{a:1,b:2},{c:3,d:4})
//console.log(myObj);

function sumOne(a,b){
    return a+b;
}

var myA=[5,4,1]
console.log(sumOne(5,4));
console.log(sumOne(myA));
console.log(sumOne(...myA));//Spread Operator

function sumTwo(...args){
    let sum=0;
    for (const arg of args) {
        sum+=arg;
    }
    return sum;
}

console.log(sumTwo(2,3,4));

function prodTwo(a,b,...args){
    let sum=0;
    for (const arg of args) {
        sum+=arg;
    }
    let multi=a*b;
    return [sum,multi];
}

console.log(prodTwo(2,7,3,4,5,6));