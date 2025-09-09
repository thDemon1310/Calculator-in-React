import React, { useContext } from "react";
import { AddElementStateContext } from "../../../context/calc";
// import solve from "../../../modules/calculate";

const Equal = () => {
  const value = useContext(AddElementStateContext);
  const number = value.number;
  const operator = value.operator;
  return (
    <button
      className="text-white bg-[#008000] flex justify-center items-center font-bold text-3xl border border-black rounded-2xl row-start-4 row-end-6 col-start-5 col-end-6 hover:bg-[#004d00]"
      onClick={() => {
        // solve(number);
        console.log(operator);
        console.log(number);
      }}
    >
      =
    </button>
  );
};

export default Equal;
