import "./App.css";
import Header from "./componentsToDoList/Header";
import TaskAdder from "./componentsToDoList/TaskAdder";
import TodoList from "./componentsToDoList/TodoList";



function App() {
  return (
    <div className="App">
      <Header/>
      <TaskAdder/>
      <TodoList/>
    </div>
  );
}

export default App;
