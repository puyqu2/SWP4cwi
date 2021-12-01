var i = 1;

function addTask() {
  var task = document.getElementById("taskInput").value;
  var name = document.getElementById("nameInput").value;
  if (task != "") {
    var container = document.getElementById("addtask");
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", i);
    newDiv.setAttribute("onclick", "deleteTask(id)")
    newDiv.innerHTML = task + "-" + name ;
    container.appendChild(newDiv);
    i++;
  }
}

function deleteTask(j){
    var container = document.getElementById("addtask");
    var div = document.getElementById(j)
    container.removeChild(div);
}
