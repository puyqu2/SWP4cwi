import React, { Component } from 'react';
import styles from './Todo.module.css';


class Todo extends Component{
    render(){
        return(
            <div className={styles.container}>
                <div>Einkaufen</div>
                <div>Icon</div>
            </div>
        );
    }
}

export default Todo;