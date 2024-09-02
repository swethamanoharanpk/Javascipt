let user = {name: "john",age: 21 , city: "kannur"}


console.log(user.name);
console.log(user["name"]);

console.log(Object.entries(user)); 
console.log(Object.entries(user)[0]);



for(let key in user) {
    console.log(key)
    console.log(user[key]);

}




/*let array = ["apple", "banana","orange"];
for(let fruit of array){
    console.log(fruit)
}*/