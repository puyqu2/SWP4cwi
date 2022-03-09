import logo from "./logo.svg";
import "./App.css";
import SuperList from "./components05/list";
import Button from "./components05/button";
import Card from "./components05/card";

function App() {
  return (
    <div className="App">
      
        <SuperList />
        <Button />
      
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
