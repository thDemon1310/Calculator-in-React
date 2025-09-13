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
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${action.payload}`,
      };

    default:
      break;
  }
};
export { ACTIONS };
export default reducer;
