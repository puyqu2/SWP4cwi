import "./App.css";

import Vote from "./components07/vote";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Vote candidate="Jürgen" address="Reuthe"/>
      <Vote candidate="Hans" address="Bizau"/>
      <Vote candidate="Peter" address="Mellau"/>
      </div>
    </div>
  );
}

export default App;
