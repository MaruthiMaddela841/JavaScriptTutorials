function calculation(operation,num1,num2){//Higher Order Function
    let result=operation(num1,num2);
    return result;
}

function add(x,y){
    return x+y;
}

function sub(x,y){
    return x-y;
}

console.log(calculation(add,4,5));
console.log(calculation(sub,4,5));