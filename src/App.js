import "./styles.css";
import { useState } from "react";

export default function App() {
  const [one, setOne] = useState(0);
  const [p, setP] = useState("that");
  const fun = () => {
    setOne(!one);
    if (one === 1) {
      setOne(0);
      setP("that1");
    } else {
      setOne(1);
      setP("that0");
    }
  };
  return (
    <div className="App">
      <button onClick={fun} className={p}>
        Toggle
      </button>
      <br />
      {one ? <div>title active</div> : <div>title inactive</div>}
    </div>
  );
}
