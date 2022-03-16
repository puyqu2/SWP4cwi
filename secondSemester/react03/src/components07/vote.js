import { Component } from "react";
import styles from "./vote.module.css";
class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  voted = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div onClick={this.voted} className={styles.card}>
        <h1>{this.props.candidate}</h1>
        <h4>{this.props.address}</h4>
        <h2>{this.state.counter} </h2>
      </div>
    );
  }
}

export default Vote;
