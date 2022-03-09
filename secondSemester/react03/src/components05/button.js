import { Component } from "react";
import styles from "./button.module.css"
export default class Button extends Component {
  render() {
    return (
      <div className={styles.outerButton}>
        <button className={styles.button} >Sendar</button>
      </div>
    );
  }
}