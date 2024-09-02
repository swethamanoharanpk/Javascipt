fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>data.json())
.then((res)=>displaydata(res))
.catch((err)=>console.log(err));


function displaydata(data){
    console.log(data)
    let body = document.getElementById("tablebody");
    let htmldata = "";
    data.forEach((user)=>{
        //console.log(user);
        htmldata += `<tr>
        <th scope="row">${user.id}</th>
        <td>${user.name}</td>
        <td>${user.phone}</td>
        <td>${user.email}</td>
        <td>${user.website}</td>
        <td>${user.address.city}</td>
      </tr>`
    })
    body.innerHTML = htmldata;
}