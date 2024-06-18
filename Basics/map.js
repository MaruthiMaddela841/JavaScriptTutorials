var myMap= new Map();
myMap.set(1,"Maruthi");
myMap.set(2,"Pruthwi");
myMap.set(3,"Rana");
myMap.set(4,"SRK");

console.log(myMap);

for(let key of myMap.keys()){
    console.log(`Key is :: ${key}`)
}

for(let value of myMap.values()){
    console.log(`Value is :: ${value}`)
}

for(let [key,value] of myMap){
    console.log(`Key is ${key}, Value is :: ${value}`)
}

myMap.forEach((key)=>console.log(`${key}`))

myMap.forEach((value,key)=>console.log(`${value} and ${key}`))

myMap.delete(4)
for(let [key,value] of myMap){
    console.log(`Key is ${key}, Value is :: ${value}`)
}
console.log(myMap.size)