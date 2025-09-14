const total = (state) => {
  let {
    currentOperand: currNum,
    previousOperand: prevNum,
    operation: operator,
  } = state;
  currNum = parseFloat(currNum);
  prevNum = parseFloat(prevNum);
  switch (operator) {
    case "+": {
      const evaluatedTotal = prevNum + currNum;
      return evaluatedTotal;
    }
    case "-": {
      const evaluatedTotal = prevNum - currNum;
      return evaluatedTotal;
    }
    case "÷": {
      const evaluatedTotal = prevNum / currNum;
      return evaluatedTotal;
    }
    case "*": {
      const evaluatedTotal = prevNum * currNum;
      return evaluatedTotal;
    }

    default:
      break;
  }
};

export default total;
