export function binarySearchRecursive(search, values, start, end, iterations = 0, compareFunc) {
    console.log("Start, end:", start, end);
    iterations++;
  
    const middle = Math.floor((start + end) / 2);
  
    let comparison;
    if (compareFunc) {
      comparison = compareFunc(values[middle], search);
    } else {
      comparison = standardCompare(values[middle], search);
    }
  
    console.log("comparison is:", comparison);
  
    if (comparison > 0) {
      end = middle - 1;
    } else if (comparison < 0) {
      start = middle + 1;
    }
    else if (comparison == 0) {
      console.log("Found in iterations:", iterations);
      return { middle, iterations };
    }
    if (comparison == undefined || start > end) {
      console.log("Not found");
      return { middle: -1, iterations };
    }
  
    return binarySearchRecursive(search, values, start, end, iterations, compareFunc);
  }
  

function standardCompare(arrayValue, search) {
    if (typeof search == "string") {
      return arrayValue.localeCompare(search);
    } else if (typeof search == "number") {
      if (arrayValue < search) return -1;
      else if (arrayValue > search) return 1;
      else if (arrayValue == search) return 0;
    } else {
      console.log("It was neither string or number");
    }
  }