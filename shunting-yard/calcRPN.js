export default function calculate(string) {
  const tempArr = string.trim().split(" ");
  // console.log("\n===============\n");
  

  const inputQueue = tempArr.map((string) => {
    const convertedToNum = Number(string);

    if (isNaN(convertedToNum)) {
      return string;
    }

    return convertedToNum;
  });

  // console.log(inputQueue);

  const resultStack = [];

  while (inputQueue.length > 0) {
    // console.log("result stack:", resultStack);

    const shiftedElement = inputQueue.shift();

    if (typeof shiftedElement == "number") {
      resultStack.push(shiftedElement);
    } else {
      doOperation(shiftedElement);
    }
  }

  // console.log("Result is:", resultStack[0]);

  function doOperation(operation) {
    // console.log("operation is:", operation);

    const firstNumber = resultStack.pop();

    const secondNumber = resultStack.pop();

    // console.log("Handling operation:", operation, "First:", firstNumber, "Second:", secondNumber);

    if (firstNumber && secondNumber) {
      switch (operation) {
        case "*":
          resultStack.push(firstNumber * secondNumber);

          break;

        case "/":
          resultStack.push(firstNumber / secondNumber);

          break;

        case "+":
          resultStack.push(firstNumber + secondNumber);

          break;

        case "-":
          // NOTE THE OPPOSITE ORDER

          resultStack.push(secondNumber - firstNumber);

          break;

        case "^":
          // NOTE THE OPPOSITE ORDER

          resultStack.push(Math.pow(secondNumber, firstNumber));

          break;
      }
    }
  }
  return resultStack[0]
}

// calculate("1 2 4 + *");
calculate("-2 2 ^");
// calculate("5 2 3 * - 3 4 ^ +");
// calculate("1 2 1 * + 2 2 ^ +");
// calculate("1 2 4 + * 3 -");

// calculate("1 2 4 * + 3 -");

// calculate("85 17 804 - *");

// calculate("5 2 ^");
