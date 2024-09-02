class First{
    constructor(name,domain,place){
        this.value1 = name,
        this.value2 = domain,
        this.value3 = place
    }
    firstDetails(){
        console.log(this.value3);

    }
}
//const obj = new First("swetha","mern","kannur")
//obj.firstDetails()

class Second extends First{
    constructor(name,domain,place,email,favcolor){
        super(name,domain,place)
        this.place = place,
        this.domain = domain,
        this.email = email,
        this.favcolor = favcolor 
    }
    secondDetails(){
        console.log(this.place + " "+"course is" +" " + this.domain);
    }

}
 //const data = new Second("aswathi", "mern", "thissur", "swetha@gmail.com", "blue")
 //data.secondDetails()
 //data.firstDetails()

 class Third extends Second{
    constructor(name,domain,place,email,favcolor,address, city){
        super(name,domain,place,email,favcolor)
        this.address = address,
        this.city = city
    }
    thirdDetails(){
        console.log();
    }

 }
 const object= new Third("swathi","python","calicut","swathi@gmail.com","red","kannur","kerala")
 object.secondDetails()
 object.firstDetails()