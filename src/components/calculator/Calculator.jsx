import Keypad from "../keypad/Keypad";
import Screen from "../screen/Screen";


const Calculator = () => {
  return (
    <div className="w-[26rem] h-[30rem]  text-white grid grid-rows-[2fr_5fr] border-2 border-gray-500">
      <Screen />
      <Keypad />
    </div>
  );
};

export default Calculator;
