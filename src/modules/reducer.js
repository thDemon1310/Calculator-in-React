const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_DIGIT: {
      if (action.payload === 0 && state.currentOperand === "0") {
        return state;
      }
      if (action.payload === "." && state.currentOperand.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${action.payload}`,
      };
    }
    case ACTIONS.CHOOSE_OPERATION:
      return {
        ...state,
        previousOperand: `${state.currentOperand}`,
        currentOperand: "",
        operation: `${action.payload}`,
      };
    case ACTIONS.CLEAR:
      return {
        ...state,
        previousOperand: "",
        currentOperand: "0",
        operation: "",
      };
    default:
      break;
  }
};
export { ACTIONS };
export default reducer;
