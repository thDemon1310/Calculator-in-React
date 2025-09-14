import total from "./handleTotal";

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
    case ACTIONS.CHOOSE_OPERATION: {
      if (state.currentOperand.length == 0) {
        return {
          ...state,
          operation: `${action.payload}`,
        };
      }
      if (
        state.currentOperand.length !== 0 &&
        state.previousOperand.length !== 0
      ) {
        let evaluatedTotal = total(state);
        return {
          ...state,
          previousOperand: evaluatedTotal,
          currentOperand: "",
          operation: `${action.payload}`,
        };
      }
      return {
        ...state,
        previousOperand: `${state.currentOperand}`,
        currentOperand: "",
        operation: `${action.payload}`,
      };
    }
    case ACTIONS.CLEAR:
      return {
        ...state,
        previousOperand: "",
        currentOperand: "0",
        operation: "",
      };
    case ACTIONS.DELETE_DIGIT: {
      const remaningDegit = state.currentOperand.slice(0, -1);
      if (state.currentOperand === "0") {
        return state;
      }
      if (
        state.currentOperand.length === 0 &&
        state.previousOperand.length !== 0
      ) {
        return {
          ...state,
          previousOperand: "",
          currentOperand: state.previousOperand,
          operation: "",
        };
      }
      return {
        ...state,
        currentOperand: remaningDegit,
      };
    }

    default:
      break;
  }
};
export { ACTIONS };
export default reducer;
