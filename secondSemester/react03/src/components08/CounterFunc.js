import { useEffect, useState } from "react";
export default function CounterFunc() {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({"firstname":"Jürgen", "lastname":"Muxel"})
  useEffect(() => {
    console.log("started func");
  }, [count]);
  let increase = () => {
    setCount(count + 1);
    setPerson({"firstname":"hans"})
  };
  return (
    <div>
      <h1>Functional Counter</h1>
      <h2>{count}</h2>
      <button onClick={increase}>inc</button>
      {person.firstname}
    </div>
  );
}
