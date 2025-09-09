import React, { useContext } from "react";
import { AddElementStateContext } from "../../../context/calc";
import calculate from "../../../modules/calculate";

const Operator = ({ data }) => {
  const value = useContext(AddElementStateContext);
  const setOperator = value.setOperator;
  const number = value.number;
  const setNumber = value.setNumber;
  const operator = value.operator;
  const inputOperator = async () => {
    // its job is to take state of Number state and transfer it to another state with the symbol
    let combineString = number.join("");
    let wholeNumber = parseInt(combineString, 10); // 10 is telling that the number should be converted to decimen base
    if (operator.length == 0) {
      setOperator((prev) => [...prev, wholeNumber, data]);
      setNumber([]);
    } else if (typeof operator[1] == "string") {
      const resolved = calculate(wholeNumber, operator);
      setOperator(resolved);
      setNumber([]);
    }
  };
  return (
    <button
      className="text-white bg-[#484848] flex justify-center items-center font-bold text-3xl border border-black rounded-2xl hover:bg-[#ffffff54]"
      onClick={inputOperator}
    >
      {data}
    </button>
  );
};

export default Operator;
