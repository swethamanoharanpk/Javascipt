async function getData(){
    let res = await fetch("https://jsonplaceholder.typicode.com/comments");
    let data = await res.json();
    let user = {};

    data.forEach((post)=>{
        console.log(post);

        if(post.postId in user){
            let value = user[post.postId]
            let numPost = value.numPost;
            if(post.name){
                numPost++
            }
            user[post.postId] = {numPost: numPost}


            

        }else{
            let numPost = 0;
            if(post.name){
                numPost++
            }
            user[post.postId] = {numPost: numPost}

        }
    })
    /*console.log(user);*/
    let htmlData = document.getElementById("htmlBody")

    for(let key in user){
        htmlBody += `<tr>
    <th scope="row">${key}</th>
    <td>${user[key].numPost}</td>

    
  </tr>`

    }
        
    

    htmlData.innerHTML = htmlBody; 



}
getData();


