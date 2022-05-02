import React, { useState } from "react";

function Test() {
  const [count, setCount] = useState<number>(0);

  const handleIncrease = () => setCount((prevCount) => prevCount + 1);
  const handleDecrease = () => setCount((prevCount) => prevCount - 1);

  return (
    <>
      <h2>{count}</h2>
      <button type="button" onClick={handleIncrease}>
        increase
      </button>
      <button type="button" onClick={handleDecrease}>
        decrease
      </button>
    </>
  );
}

export default Test;
