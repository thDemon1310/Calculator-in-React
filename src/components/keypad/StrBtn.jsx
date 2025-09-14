import { useContext } from "react";
import { OperationContext } from "../../context/operationContext";
import operator from "../../modules/handleOperator";

const StrBtn = ({ btn }) => {
  const value = useContext(OperationContext);
  const baseStyleClass = "border border-gray-950 hover:bg-gray-600";
  const gridSpanClass =
    btn === "AC" || btn === "=" ? "col-span-2 font-bold" : "";
  let activeClass;
  if (btn === "AC") {
    activeClass = "active:bg-red-500 transition-colors";
  } else if (btn === "=") {
    activeClass = "active:bg-green-500 transition-colors";
  } else {
    activeClass = "active:bg-gray-700";
  }
  return (
    <button
      className={`${baseStyleClass} ${gridSpanClass}  ${activeClass}`}
      onClick={() => {
        operator(value.dispatch, btn);
      }}
    >
      {btn}
    </button>
  );
};

export default StrBtn;
