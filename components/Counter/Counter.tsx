"use client";
import React, { useState } from "react";

interface CounterProps {
  initialCount?: number;
}

function Counter({ initialCount = 99 }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="my-8 mx-auto flex w-full max-w-48">
      <button
        className="hover:opacity-80 w-10 text-3xl font-bold bg-blue-500 text-white rounded cursor-pointer"
        onClick={decrement}
      >
        -
      </button>
      <span className="flex text-center text-5xl">{count}</span>
      <button
        className="hover:opacity-80 w-10 text-3xl font-bold bg-blue-500 text-white rounded cursor-pointer"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
