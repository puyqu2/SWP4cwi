import { Component } from "react";
import "./App.css";
import Header from "./componentsToDoList/Header";
import TaskAdder from "./componentsToDoList/TaskAdder";
import TodoList from "./componentsToDoList/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ id: 1, name: "einkaufen", done: false },{ id: 2, name: "putzen", done: false }],
    };
  }

  addTask = (value) =>{
    let todo = {
      id:1,
      name:value,
      done:false
    }
    let todos = this.state.todos
    todos.push(todo);

    this.setState({
      todos: todos
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <TaskAdder onTaskAdded = {this.addTask} />
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
