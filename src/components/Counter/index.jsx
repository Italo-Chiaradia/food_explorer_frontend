import { Container } from "./styles";

import { PiMinusThin } from "react-icons/pi";
import { PiPlusThin } from "react-icons/pi";

import {useState} from "react";

export function Counter() {

  const [count, setCount] = useState(1);

  function handlePlusCount() {
    if (count == 99) {
      setCount(0);
    }
    setCount(count + 1);
  }
  function handleMinusCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  return (
    <Container>
      <button onClick={() => handleMinusCount()}>
        <PiMinusThin />
      </button>
      <span>
        {String(count).padStart(2, '0')}
      </span>
      <button onClick={() => handlePlusCount()}>
        <PiPlusThin />
      </button>
    </Container>
  );
}