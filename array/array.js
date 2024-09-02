let array = [10,20,30,40,50]


/*for(let i=0; i<array.length; i++){
    console.log(array[i])
}*/


/*let sum = array.reduce((prev, current)=>prev+current);
console.log(sum);

let maximum = array.reduce((prev,current)=>Math.max(prev,current));
console.log(maximum);

let minimum = array.reduce((prev,current)=>Math.min(prev,current));
console.log(minimum);*/

/*for(let i = 1; i < 5; i++){
    let str = "";
    for(j = 1; j <= i; j++){
        str += j + " ";

    }
    console.log(str);

}*/


/*let num = 0;
for(let i = 1; i < 5; i++){
    let str = "";
    for(let j = 1; j <= i; j++){
        num++;
        str = str + num + " ";

    }
    console.log(str)
    
}*/




/*
1 - Check employee anil is in the array or not
2 - Find the employee details whose id is 02
3 - Find all the employees whose age is 25
*/


var employee = [
    [01, "ram", "10 years", 35],
    [02, "anil", "2 years", 25],
    [03, "nikhil", "4 years", 28],
    [04, "nikhil", "4 years", 25],
];

/*let name = "anil";
let exists = false;
for(let i = 0; i < employee.length; i++){
    //console.log(employee[i]);
    
    for(let j = 0; j < employee[i].length; j++){
        //console.log(employee[i][j]);
        if(employee[i][j] === name){
            exists = true;
            console.log(`${name} exists in the array`);
            break;
        }



    }
}
if(!exists){
    console.log(`${name} doesn't exist in the array`);
}
*/


/*let id = 02;
for(let i = 0; i < employee.length; i++){
    if(employee[i][0] === id){
              //console.log(`Employee details of ID ${id} is `, employee[i]);
        let id  = employee[i][0];
        let name = employee[i][1];
        let work = employee[i][2];
        let age = employee[i][3]
        console.log(`ID: ${id}, NAME: ${name}, WORK EXP: ${work}, AGE: ${age}`);


    }
}*/


/*let ageCheck = 25;
for(let i = 0; i < employee.length; i++){
    if(employee[i][3] === ageCheck){ 
        let person = employee[i][1] + " ";
        console.log(person);
        
    }

}*/



//https://docs.google.com/forms/d/18AVGctMSup0V1TWRiOm2jYRJQmOa3xSzYf8KHjU26wA/viewform?edit_requested=true
