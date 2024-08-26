import { Container } from "./styles";

/* import { PiMinusThin as Plus } from "react-icons/pi";
import { PiPlusThin as Minus } from "react-icons/pi"; */
import Minus from "../../assets/svg/minus.svg";
import Plus from "../../assets/svg/Plus.svg";

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
        <img src={Minus}/>
      </button>
      <span>
        {String(count).padStart(2, '0')}
      </span>
      <button onClick={() => handlePlusCount()}>
        <img src={Plus}/>
      </button>
    </Container>
  );
}