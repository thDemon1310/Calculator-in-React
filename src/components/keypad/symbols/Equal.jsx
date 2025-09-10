import React, { useContext } from "react";
import { AddElementStateContext } from "../../../context/calc";
import calculate from "../../../modules/calculate";
// import solve from "../../../modules/calculate";

const Equal = () => {
  const value = useContext(AddElementStateContext);
  const setOperator = value.setOperator;
  const number = value.number;
  const setNumber = value.setNumber;
  const operator = value.operator;

  const solve = () => {
    let combineString = number.join("");
    let wholeNumber = parseInt(combineString, 10); // 10 is telling that the number should be converted to decimen base
    const resolve = calculate(wholeNumber, operator);
    setOperator([]);
    setNumber([resolve]);
  };
  return (
    <button
      className="text-white bg-[#008000] flex justify-center items-center font-bold text-3xl border border-black rounded-2xl row-start-4 row-end-6 col-start-5 col-end-6 hover:bg-[#004d00]"
      onClick={solve}
    >
      =
    </button>
  );
};

export default Equal;
