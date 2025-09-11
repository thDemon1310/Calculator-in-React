import React from "react";
import Screen from "./screen/Screen";
import Keypad from "./keypad/Keypad";

const Calculator = () => {
  return (
    <div className="w-[35rem] h-[40rem] border text-white">
      <Screen />
      <Keypad />
    </div>
  );
};

export default Calculator;
