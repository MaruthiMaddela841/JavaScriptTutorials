function resolveAfterDelay(delay){
    let promise=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(`Resolve called after ${delay} milliseconds`)
        },delay)
    })
    return promise
}

resolveAfterDelay(2000).then(function(result){
    console.log(result)
})

async function asyncExample(){
    console.log("START")
    const result=await resolveAfterDelay(5000);
    console.log(result)

    const result2=await resolveAfterDelay(3000);
    console.log(result2)
    console.log("END")
}
asyncExample();
const uno= ()=>{
    console.log("I'm one")
}

const dos= ()=>{
    setTimeout(() => {
        console.log("Wohoooo...")
    }, 3000);
    console.log("I'm two")
}

const tres= ()=>{
    console.log("I'm three")
}

uno()
dos()
tres()