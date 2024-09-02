fetch("https://jsonplaceholder.typicode.com/posts")
.then((data)=>data.json())
.then((res)=>htmlDisplay(res))
.catch((err)=>console.log(err));

function htmlDisplay(posts){
    console.log(posts);
    let htmldata = document.getElementById("display");
    let htmlbody = "";
    posts.forEach((user)=>{
        htmlbody += `<tr>
        <th scope="row">${user.userId}</th>
        <td>${user.id}</td>
        <td>${user.title}</td>
        <td>${user.body}</td>
      </tr>`

    })
    htmldata.innerHTML = htmlbody;

}