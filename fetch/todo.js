fetch("https://jsonplaceholder.typicode.com/todos")
.then((res)=>res.json())
.then((data)=>todosData(data))

function todosData(todos){
    console.log(todos)
    let htmlbody = document.getElementById("htmlbody");
    let htmlData ="";
    todos.forEach((todo)=>{
        htmlData += `<tr>
        <th scope="row">${todo.userId}</th>
        <td>${todo.id}</td>
        <td>${todo.title}</td>
        <td>${todo.completed? 'completed ' : 'pending'}</td>
      </tr>`
    })
    htmlbody.innerHTML = htmlData;
}