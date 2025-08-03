import React from "react";
import backImg from "../../../assets/pngwing.com.png";

const Back = () => {
  return (
    <div className="bg-red-600 hover:bg-[#990000] flex justify-center items-center rounded-2xl">
      <button>
        <img src={backImg} className="w-[45px] invert" alt="back" />
      </button>
    </div>
  );
};

export default Back;
