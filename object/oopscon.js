/*let obj = {
    name : "swetha",
    place: "kannur"
    
}
console.log(this);
*/




class person{
    constructor(name,place,address,mobile){
        this.a = name,
        this.b = place,
        this.c = address,
        this.d = mobile
    }
    display(){
        console.log("i am "+ this.a + "from"+ this.b);
    }
}
const hello = new person("swetha", "kannur","kannur",97643333)
const hello1 = new person("swathi", "thrissur","kannur",9767333)
const hello2 = new person("aswathi", "kozhikode","kannur",976465533)
hello1.display()
