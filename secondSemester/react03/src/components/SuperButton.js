import  { Component } from "react";
import styles from './SuperButton.module.css'

export default class SuperButton extends Component{
    render(){
        return <div className={styles.heading}>
            <button>Button</button>
        </div>
    }
}