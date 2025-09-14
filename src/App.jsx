import { useReducer } from "react";
import Calculator from "./components/calculator/Calculator";
import reducer from "./modules/reducer";
import { OperationContext } from "./context/operationContext";

const App = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    { currentOperand: 0 },
  );
  return (
    <>
      <OperationContext.Provider
        value={{ currentOperand, previousOperand, operation, dispatch }}
      >
        <div className="bg-gradient-to-r from-[#0F2027] to-[#203A43] w-screen h-screen flex justify-center items-center ">
          <Calculator />
        </div>
      </OperationContext.Provider>
    </>
  );
};

export default App;
