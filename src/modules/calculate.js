const calculate = (wholeNum, operaState) => {
  let key = operaState[1];
  switch (key) {
    case "+": {
      const sum = wholeNum + operaState[0];
      return sum;
    }
    case "-": {
      const substract = operaState[0] - wholeNum;
      return substract;
    }
    case "*": {
      const multiplay = wholeNum * operaState[0];
      return multiplay;
    }
    case "/": {
      const devide = operaState[0] / wholeNum;
      return devide;
    }
    default:
      break;
  }
};

export default calculate;
