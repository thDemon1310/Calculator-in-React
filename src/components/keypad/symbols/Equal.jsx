import React, { useContext } from "react";
import { CalculateContest } from "../../../context/calc";
import solve from "../../../modules/calculate";

const Equal = () => {
  const value = useContext(CalculateContest);
  const number = value.number;
  return (
    <button
      className="text-white bg-[#008000] flex justify-center items-center font-bold text-3xl border border-black rounded-2xl row-start-4 row-end-6 col-start-5 col-end-6 hover:bg-[#004d00]"
      onClick={() => {
        solve(number);
      }}
    >
      =
    </button>
  );
};

export default Equal;
