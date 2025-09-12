import Screen from "./screen/Screen";
import Keypad from "./keypad/Keypad";

const Calculator = () => {
  return (
    <div className="w-[26rem] h-[35rem] border text-white grid ">
      <Screen />
      <Keypad />
    </div>
  );
};

export default Calculator;
