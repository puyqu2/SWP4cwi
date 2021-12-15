function registerEvents() {
  document.getElementById("loadUser").addEventListener("click", function () {
    loadUsers();
  });
  document.getElementById("loadTodos").addEventListener("click", function () {
    loadTodos();
  });
}

function loadTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let html = "";
      data.forEach((todo) => {
        html += "<li>" + todo.title + "</li>";
      });
      document.getElementById("todos").innerHTML = html;
    })
    .catch(function (err) {
      console.log(err);
    });
}
function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let html = "";
      data.forEach((user) => {
        html += "<li>" + user.name + "</li>";
      });
      document.getElementById("todos").innerHTML = html;
    })
    .catch(function (err) {
      console.log(err);
    });
}
registerEvents();
