import React, { useContext } from "react";
import { AddElementStateContext } from "../../context/calc";

const Output = () => {
  const value = useContext(AddElementStateContext);
  return (
    <div className="bg-[#f5deb3] w-full h-1/4">
      <h2>{value.number}</h2>
      <div>
        <h3>{value.operator}</h3>
      </div>
    </div>
  );
};

export default Output;
