let numbers = [1,2,3,4,5];

          //USING FUNCTIONS
/*numbers.forEach(square);
numbers.forEach(display)
function display(element){
    console.log(element)
}

function double(element,index,array){
    array[index]= element * 2 ;

}
function triple(element,index,array){
    array[index] = element * 3;
}
function square(element,index,array){
    array[index] = Math.pow(element,2)
}

//numbers.forEach((element)=>console.log(element))
*/


           //USING ARROW FUNCTION

           
numbers.forEach((value,index,array)=>{
    console.log(value,index,array)
});           