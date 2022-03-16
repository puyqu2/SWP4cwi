import { Component } from "react";
import styles from "./counter.module.css";
export default class Counter extends Component {
  
  increase = () =>{
    this.setState({
      count:this.state.count + 1
    })
  }

  componentDidMount(){
    console.log("started");
  }
  
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <h1>Count</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increase}>Inc</button>
      </div>
    );
  }
}

