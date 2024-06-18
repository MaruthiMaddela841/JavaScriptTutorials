let set = new Set();
set.add(1),
set.add(2)
set.add(2)
set.add(3)
set.add(4)

console.log(set)
set.add(5)
console.log(set)
set.delete(2)
console.log(set)
console.log(set.has(2))
console.log(set.has(3))

for(let value of set){
    console.log(value)
}
let person={
    firstName:"Maruthi",
    lastName:"Maddela"
}
set.add(person)
console.log(set)
set.clear()
console.log(set)