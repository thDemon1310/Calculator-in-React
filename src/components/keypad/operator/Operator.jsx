import React, { useContext } from "react";
import { AddElementStateContext } from "../../../context/calc";

const Operator = ({ data }) => {
  const value = useContext(AddElementStateContext);
  const setOperator = value.setOperator;
  const number = value.number;
  const setNumber = value.setNumber;
  const inputOperator = () => {
    // its job is to take state of Number state and transfer it to another state with the symbol
    setOperator((prev) => [...prev, number, data]);
    setNumber([])
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
