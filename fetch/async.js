function hello(){
    return new Promise((resolve, reject)=>{
        
        setTimeout(() => {
            resolve("promise");
            
        },3000);

    })

}
 //hello().then((data)=>{console.log(data)})

async function hai(){
    const b = await hello()
    console.log(b);
}
hai()


