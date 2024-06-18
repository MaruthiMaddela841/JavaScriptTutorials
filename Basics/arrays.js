var countries=["India","USA","Japan"];
var states= new Array("Delhi","Telangana","Andhra");
console.log(countries[0]);
console.log(states.length);
states[0]="Punjab";
console.log(states[0]);

var user=["Maruthi","Maddela","abc@gmail.com","26","SSP"]
console.log(user);
user.pop();
console.log(user);
user.pop();
console.log(user);
user.unshift("Mncl");
console.log(user);
user.shift();
console.log(user);
console.log(user.indexOf("Maddela"))
console.log(user.indexOf("SSP"))
console.log(Array.from("Maruthi"));

var numbers=[1,54,3,76,22,34,9,11]
var gt20=[]
numbers.forEach(function(number){
    if(number>20){
        console.log(`${number} is greater than 20`)
        gt20.push(number)
    }
})
console.log(gt20)

var result=numbers.filter(checkgt30);
function checkgt30(num){
    return num>30;
}
console.log(result)
var result=numbers.every(checkgt30);
function checkgt30(num){
    return num>40;
}
console.log(result)
var result=numbers.some(checkgt30);
function checkgt30(num){
    return num>40;
}
console.log(result)