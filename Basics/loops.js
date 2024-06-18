var user=["Maruthi","Maddela","abc@gmail.com",26,"SSP"]

for(let i=0;i<user.length;i++){
    if(typeof user[i] !== "string") continue;//break;
    console.log(user[i]);
}
console.log("#################################")
let j=0;
while(j<user.length){
    console.log(user[j]);
    j++;
}
let k=0;
console.log("#################################")
do{
    console.log(user[k]);
    k++
}while(k<user.length)
console.log("#################################")
user.forEach((s)=>(console.log(s)))
console.log("#################################")
const socialMedia=["Facebook","Whatsapp","Youtube","Netflix"];
for(const n of socialMedia){
    console.log(n);
}
console.log("#################################")
const symbols={
    yt: "Youtube",
    fb: "Facebook",
    ig: "Instagram"
}
for(const n in symbols){
    console.log(n);
}
console.log("#################################")
for(const n in symbols){
    console.log(symbols[n]);
}
console.log("#################################")
for(const n in symbols){
    console.log(`Key is ${n} and it's value is ${symbols[n]}`);
}
console.log("#################################")
var name="Maruthi"//global
{
    var x=20;//global
    console.log(x)
}
console.log(x)
{
    let y=20;//local
    console.log(y)
}
//console.log(y)

function test(){
    if(true){
        var testVar="Inside var";//functional scope
        let testLet="inside let";//block scope
    }
    console.log(testVar)
    //console.log(testLet)
}
// console.log(testVar)
// console.log(testLet)
test()

var name="Maruthi";
function test2(){
    var name="Maddela";
    console.log(name)
}
test2()
console.log(name)

function f1(){
    var i=20;
    f2();
}
function f2(){
    //console.log(i)
}
f1();

var x=20;
function func1(){
    console.log(x);
}
x=40;
func1();

var text='outside';
function logIt(){
    console.log(text);
    var text='inside';
};
logIt();

var sum=function(num1,num2){
    return num1+num2;
    //console.log(`Sum is::${num1+num2}`)
};
function printSum(addition){
    var result=addition(5,4);
    console.log(`Sum is::`+result)
}

printSum(sum)