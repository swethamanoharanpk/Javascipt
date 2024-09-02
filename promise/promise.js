let age = 16;

let myPromise = new Promise((resolve,reject) =>{
    if(age>20){
        resolve("access granted");
    }
    else{
        reject("access denied");
    }
})
myPromise.then((res)=>console.log(res)).catch((mes)=>console.log(mes));