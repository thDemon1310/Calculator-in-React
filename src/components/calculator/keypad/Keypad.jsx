import StrBtn from "./StrBtn";
import NumBtn from "./NumBtn";
const arr = [
  "AC",
  "DEL",
  "÷",
  1,
  2,
  3,
  "*",
  4,
  5,
  6,
  "+",
  7,
  8,
  9,
  "-",
  ".",
  0,
  "=",
];
const Keypad = () => {
  return (
    <div className="grid grid-cols-4">
      {arr.map((symbol) => {
        if (typeof symbol == "string") {
          return <StrBtn btn={symbol} key={arr.indexOf(symbol)} />;
        } else {
          return <NumBtn btn={symbol} key={arr.indexOf(symbol)} />;
        }
      })}
    </div>
  );
};

export default Keypad;
