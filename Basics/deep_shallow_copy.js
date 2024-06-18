let person={
    firstName:"Maruthi",
    lastName:"Maddela",
    age:27
}

let person2=person;//Shallow
let person3={...person}//Deep
person.firstName="Reshma";

console.log(person)
console.log(person2)
console.log(person3)

let numbers=[1,2,5,4,3,6]
let oddNumbers=[11,13,15,17,...numbers]//spread operator
console.log(oddNumbers)

let address={
    mandal:"Mandamarri",
    district:"Mancherial",
    ...person
}

console.log(address)

//rest operator
function func(...numbers){
    console.log(numbers)
}
func(1)
func(1,2)