import React, { useContext } from "react";
import backImg from "../../../assets/pngwing.com.png";
import { CalculateContest } from "../../../context/calc";

const Back = () => {
  const value = useContext(CalculateContest);
  const setNumber = value.setNumber;
  const backBtn = () => {
    setNumber((prevs) => {
      const lastElement = prevs[prevs.length - 1];
      return prevs.filter((prev) => prev != lastElement);
    });
  };
  return (
    <button
      className="w-full h-full flex justify-center items-center bg-red-600 hover:bg-[#990000] rounded-2xl"
      onClick={backBtn}
    >
      <img src={backImg} className="w-[45px] invert" alt="back" />
    </button>
  );
};

export default Back;
