import React, { Component } from "react";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

class TodoList extends Component {
  render() {
    return (
      <div className={styles.center}>
        <div className={styles.container}>
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
    );
  }
}

export default TodoList;
