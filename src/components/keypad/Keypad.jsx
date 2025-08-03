import React from "react";
import Back from "./symbols/Back";
import Number from "./numb/Number";
import Equal from "./symbols/Equal";
const Keypad = () => {
  const arr = [
    "(",
    ")",
    "mod",
    "pi",
    9,
    8,
    7,
    "/",
    "root",
    6,
    5,
    4,
    "*",
    "x^2",
    3,
    2,
    1,
    "-",
    0,
    ".",
    "%",
    "+",
  ];
  return (
    <div className="w-full h-3/4 grid grid-cols-5 grid-rows-5 gap-2">
      <Back />
      {arr.map((item) => (
        <Number value={item} />
      ))}
      <Equal />
    </div>
  );
};

export default Keypad;
