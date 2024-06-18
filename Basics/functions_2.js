(function(){
    console.log("Say Hello");
})();
//self calling function

var music={
    rock:"guitar",
    classical:"violin",
}
var classical="rock";
var sound=music[classical];
console.log(sound);
delete music.classical
console.log(music);
var musical=music//sharing same memory location
console.log(musical)

var a=[11,22,33]
var b=a
a[0]=[8,9,10]
console.log(b)

var name="Maruthi";
var newName=name;
console.log(name)
console.log(newName)
name="Maddela";
console.log(name)
console.log(newName)//Not value by Ref here 

var numbers=[1,50,66,74,9,36]
console.log(numbers.sort())
numbers.sort(
    function(a,b){
        return a-b;
    }
)
console.log(numbers)
numbers.sort(
    function(a,b){
        return b-a;
    }
)
console.log(numbers)

var persons=[
    {
        name:"Maruthi",
        age:25
    },
    {
        name:"Pruthwi",
        age:29
    },
    {
        name:"Reshma",
        age:24
    },
]

console.log(persons)
persons.sort(
    function(a,b){
        return a.age-b.age;
    }
)
console.log(persons)
persons.sort(
    function(a,b){
        return b.age-a.age;
    }
)
console.log(persons)
console.log(persons.reverse())