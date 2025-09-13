import { useContext } from "react";
import { OperationContext } from "../../context/operationContext";
import { ACTIONS } from "../../modules/reducer";
const NumBtn = ({ btn }) => {
  const value = useContext(OperationContext);
  return (
    <button
      className="border border-gray-950  hover:bg-gray-600"
      onClick={() => {
        const action = { type: ACTIONS.ADD_DIGIT, payload:  btn  };
        value.dispatch(action);
      }}
    >
      {btn}
    </button>
  );
};

export default NumBtn;
