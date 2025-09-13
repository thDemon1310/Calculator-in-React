import { useContext } from "react";
import { OperationContext } from "../../context/operationContext";
import operator from "../../modules/handleOperator";

const StrBtn = ({ btn }) => {
  const value = useContext(OperationContext);
  return (
    <button
      className={
        btn == "AC" || btn == "="
          ? "col-span-2 border border-gray-950 font-bold  hover:bg-gray-600"
          : "border border-gray-950  hover:bg-gray-600"
      }
      onClick={() => {
        operator(value.dispatch, btn);
      }}
    >
      {btn}
    </button>
  );
};

export default StrBtn;
