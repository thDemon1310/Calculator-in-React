const StrBtn = ({ btn }) => {
  return (
    <button className={btn == "AC" || btn == "=" ? "col-span-2" : ""}>
      {btn}
    </button>
  );
};

export default StrBtn;
