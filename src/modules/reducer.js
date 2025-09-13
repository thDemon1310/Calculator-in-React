const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_DIGIT:
      console.log(state);
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${action.payload}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      return {
        ...state,
        previousOperand: `${state.currentOperand}`,
        currentOperand: "",
        operation: `${action.payload}`,
      };
      case ACTIONS.CLEAR:
        return ""
    default:
      break;
  }
};
export { ACTIONS };
export default reducer;
