import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1>
  React Counter <br />
  Application
</h1>
      <h2>{count}</h2>

      <div className="btn-group">
        <button onClick={() => setCount(count + 1)}>
          Increment (+)
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrement (-)
        </button>
      </div>

      <button className="reset-btn" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;