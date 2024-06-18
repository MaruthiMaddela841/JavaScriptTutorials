fetch('https://api.chucknorris.io/jokes/random')
.then(response=>{
    return response.json();
})
.then((data)=>{
    //console.log(data);
    console.log(data.value);
})
.catch()//do this in browser console to see Promise