import React, { useContext } from "react";
import { CalculateContest } from "../../context/calc";

const Output = () => {
  const value = useContext(CalculateContest);
  return (
    <div className="bg-[#f5deb3] w-full h-1/4">
      <h2>{value.number}</h2>
    </div>
  );
};

export default Output;
