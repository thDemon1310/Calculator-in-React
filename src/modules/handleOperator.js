import { ACTIONS } from "./reducer";

const operator = (dispatch, btn) => {
  switch (btn) {
    case "AC": {
      const action = {
        type: ACTIONS.CLEAR,
      };
      return dispatch(action);
    }
    case ".": {
      const action = {
        type: ACTIONS.ADD_DIGIT,
        payload: btn,
      };
      return dispatch(action);
    }
    case "DEL": {
      const action = {
        type: ACTIONS.DELETE_DIGIT,
      };
      return dispatch(action);
    }
    default: {
      const action = {
        type: ACTIONS.CHOOSE_OPERATION,
        payload: btn,
      };
      return dispatch(action);
    }
  }
};
export default operator;
