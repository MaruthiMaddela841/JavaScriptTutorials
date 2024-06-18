let promise=new Promise(function(resolve,reject){
    if(1>0){
        resolve("Prmoise is Resolved");
    }
    else{
        reject("Promise is Rejected");
    }
})
//producer code
console.log(promise)
promise.then(function(resolve){
    console.log(resolve);
}
// function(reject){
//     console.log(reject);
// }
).catch(function (error){
    console.log(error)
}).finally(function(){
    console.log("Finally Executed")
});
//consumer code

const uno= ()=>{
    return "I'm one";
}

// const dos= async ()=>{
//     setTimeout( () => {
//         return "I'm two";
//     }, 3000);
   
// }

const dos= ()=>{
    
   return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("I'm two")
        }, 3000);
   });
}

const tres= ()=>{
    return "I'm three";
}

const callMe=async ()=>{
    let valOne=uno();
    let valTwo=await dos();
    let valThree=tres();
    console.log(valOne)
    console.log(valTwo)
    console.log(valThree)
}

callMe()