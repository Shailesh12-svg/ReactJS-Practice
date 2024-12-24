import React, { useState, useMemo } from "react";

// A function that simulates an expensive computation
const expensiveCalculation = (num) => {
  console.log("Performing expensive calculation...");
  let total = 0;
  for (let i = 0; i < 1000000000; i++) {
    total += num;
  }
  return total;
};

const Memo = () => {
  const [count, setCount] = useState(0);
  const [incrementor, setIncrementor] = useState(1);

  // Memoizing the result of the expensive computation
  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h1>React useMemo Example</h1>
      <p>Count: {count}</p>
      <p>Expensive Computation Result: {memoizedValue}</p>
      <button onClick={() => setCount(count + incrementor)}>Increment Count</button>
      <br />
      <label>
        Increment by: 
        <input
          type="number"
          value={incrementor}
          onChange={(e) => setIncrementor(parseInt(e.target.value) || 1)}
        />
      </label>
    </div>
  );
};

export default Memo;
