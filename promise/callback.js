
//CALLBACK FUNCTION

/*function add(data){
   console.log("addition");
   data();
}
add(()=>{
   console.log("addition performed");
})*/

// CALLBACK HELL

/*function sum(n1, n2, callbck) {
  callbck(n1 + n2)

}
function substract(n1, n2, callbck) {
  callbck(n1 - n2)

}
function multiplication(n1, n2, callbck) {
  callbck((n1 * n2))
}
function division(n1, n2, callbck) {
  console.log(n1 / n2);
}
sum(10, 20, (result) => {
  console.log(result);
  substract(result, 5, (sub) => {
    console.log(sub);
    multiplication(sub, 5, (mul) => {
      console.log(mul);
      division(mul, 5, (div) => {
        console.log(div);
      })
    })
  })

})*/

//PROMISE

function add(n1,n2){
  return new Promise((resolve,reject)=>{
    resolve(n1+n2)

  })
}
function substraction(n1,n2){
  return new Promise((resolve,reject)=>{
    resolve(n1-n2)
  })
}
function multiplication(n1,n2){
  return new Promise((resolve,reject)=>{
    resolve(n1*n2)
  })
}
function division(n1,n2){
  return new Promise((resolve, reject)=>{
    resolve(n1/n2)
  })
}


add(25,30).then((result)=>{
  console.log(result);
  return substraction(result,5)
}).then((sub)=>{
  
  console.log(sub);
  return multiplication(sub,2)
}).then((mul)=>{
  console.log(mul);
  return division(mul, 25)
}).then((div)=>{
  console.log(div);
})