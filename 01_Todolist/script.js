//JSON = js objective notation

const tasks = [ ]
console.log(tasks)


//Todolist
printTaskList();

//Output if Button pressed
document.getElementById("addTask").addEventListener("click", function(){
   addTask();
});

//Output if Enter pressed
document.getElementById("txtResponsible").addEventListener("keyup" , function(){
    if (event.keyCode === 13){
    addTask();
    return false;
    }
});

//Function 
function addTask(){
    let taskName = document.getElementById("txtNewTask").value;
    let taskResponsible = document.getElementById("txtResponsible").value;
    let task = {name: taskName, responsible: taskResponsible, isDone:false};
    tasks.push(task);
    printTaskList();
}

//Text printed on screen
function printTaskList(){
    document.getElementById("taskList").innerHTML = getHTMLTasks();
}

function getHTMLTasks(){
    let html = "";
    tasks.forEach(element => {
        html +="<li>" + element.name + " " + element.responsible + " "+ "<input type='checkbox'>" + "</li>";
        
    });

    return html;
}
