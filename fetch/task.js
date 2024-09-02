async function getData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json();

    let usersTask = {};
    let htmlData = document.getElementById("display");
    let htmlBody = "";

    data.forEach((todo) => {
       // console.log(todo);
        if (todo.userId in usersTask) {
            let obj = usersTask[todo.userId]
            let totalTasks = obj.totalTasks + 1;
            let pendingTasks = obj.pendingTasks;
            let completedTasks = obj.completedTasks;
            if (todo.completed) {
                completedTasks++;
            } else {
                pendingTasks++;
            }
            usersTask[todo.userId] = { totalTasks: totalTasks, pendingTasks: pendingTasks, completedTasks: completedTasks }

        } else {
            let totalTasks = 1;
            let pendingTasks = 0;
            let completedTasks = 0;
            if (todo.completed) {
                completedTasks++;
            } else {
                pendingTasks++;
            }
            usersTask[todo.userId] = { totalTasks: totalTasks, pendingTasks: pendingTasks, completedTasks: completedTasks }
        }


    });
    console.log(usersTask);
    for(let key in usersTask){
        htmlBody += `<tr>
    <th scope="row">${key}</th>
    <td>${usersTask[key].totalTasks}</td>
    <td>${usersTask[key].pendingTasks}</td>
    <td>${usersTask.completedTasks}</td>
  </tr>`

    }
        
    

    htmlData.innerHTML = htmlBody; 

}
getData();



