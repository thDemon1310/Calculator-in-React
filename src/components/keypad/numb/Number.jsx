import React from "react";

const Number = ({ value }) => {
  return (
    <div className="text-white bg-[#484848] flex justify-center items-center font-bold text-3xl border border-black rounded-2xl hover:bg-[#ffffff54]">
      {value}
    </div>
  );
};

export default Number;
