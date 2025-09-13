import { useContext } from "react";
import { OperationContext } from "../../context/operationContext";

const Screen = () => {
  const value = useContext(OperationContext);

  return (
    <div className="bg-[rgba(0,0,0,.75)] flex flex-col overflow-auto justify-around items-end p-3">
      <div className="previous text-2xl">
        {value.previousOperand} {value.operation}
      </div>
      <div className="current text-4xl break-words break-all">
        {value.currentOperand}
      </div>
    </div>
  );
};

export default Screen;
