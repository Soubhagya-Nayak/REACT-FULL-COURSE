import { Component1 } from "./Component1";
import { CounterContext } from "../context/countex";
import { useContext } from "react";

export const Button = () => {
    const value = useContext(CounterContext)
  return (
    <>
      <button onClick={() => value.setCount((count) => count + 1)}>
        <span>
          <Component1 />
        </span>
        I am a Button
      </button>
    </>
  );
};
