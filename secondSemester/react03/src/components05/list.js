import { Component } from "react";
import styles from "./list.module.css"
export default class SuperList extends Component {
  render() {
    return (
      <div className={styles.list}>
        <ul>
          <li className={styles.listObject}>Coffee</li>
          <li className={styles.listObject}>Tea</li>
          <li className={styles.listObject}>Beer</li>
        </ul>
      </div>
    );
  }
}
