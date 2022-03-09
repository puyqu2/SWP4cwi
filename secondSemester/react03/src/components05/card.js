import { Component } from "react";
import styles from "./card.module.css";
export default class Card extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.picture}>
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            width={300}
          ></img>
        </div>
        <div className={styles.content}>
          <div className={styles.header}>John Doe</div>
          <div className={styles.info}>Architect & Engineer</div>
        </div>
      </div>
    );
  }
}
