import React, { useContext } from "react";
import { CalculateContest } from "../../../context/calc";

const Number = ({ data }) => {
  const value = useContext(CalculateContest);
  const setNumber = value.setNumber;

  const numInput = () => {
    setNumber((prev) => [...prev, data]);
  };
  return (
    <button
      className="text-white bg-[#484848] flex justify-center items-center font-bold text-3xl border border-black rounded-2xl hover:bg-[#ffffff54]"
      onClick={numInput}
    >
      {data}
    </button>
  );
};

export default Number;
