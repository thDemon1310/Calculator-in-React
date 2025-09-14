const total = (state) => {
  let {
    currentOperand: currNum,
    previousOperand: prevNum,
    operation: operator,
  } = state;
  switch (operator) {
    case "+": {
      currNum = Number(currNum);
      prevNum = Number(prevNum);
      const evaluatedTotal = prevNum + currNum;
      return evaluatedTotal;
    }
    case "-": {
      currNum = Number(currNum);
      prevNum = Number(prevNum);
      const evaluatedTotal = prevNum - currNum;
      return evaluatedTotal;
    }
    case "÷": {
      currNum = Number(currNum);
      prevNum = Number(prevNum);
      const evaluatedTotal = prevNum / currNum;
      return evaluatedTotal;
    }
    case "*": {
      currNum = Number(currNum);
      prevNum = Number(prevNum);
      const evaluatedTotal = prevNum * currNum;
      return evaluatedTotal;
    }

    default:
      break;
  }
};

export default total;
