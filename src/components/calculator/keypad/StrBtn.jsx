const StrBtn = ({ btn }) => {
  return (
    <button className={(btn == "AC" || btn == "=" ? "col-span-2 border border-gray-950 font-bold  hover:bg-gray-600" : "border border-gray-950  hover:bg-gray-600")}>
      {btn}
    </button>
  );
};

export default StrBtn;
