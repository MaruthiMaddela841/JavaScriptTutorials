var user=["Maruthi","Maddela","abc@gmail.com","26","SSP"]
console.log(user.slice(1));
console.log(user.slice(1,3));
user.splice(1,2,"Hi")
console.log(user);
user.splice(2,1,"Hi","Bye")
console.log(user);