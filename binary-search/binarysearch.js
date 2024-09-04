export function binarySearch(search, values, compareFunc) {
  let min = 0;
  let max = values.length;
  let middle;
  let iterations = 0;

  while (min <= max) {
    iterations++;
    middle = Math.floor((max + min) / 2);
    console.log("PRE max, min, middle is:", max, min, middle);

    let comparison;
    if (compareFunc) {
      comparison = compareFunc(values[middle], search);
    } else {
      comparison = standardCompare(values[middle], search);
    }
    console.log("comparison is:", comparison);

    if (comparison > 0) {
      max = middle - 1;
    } else if (comparison < 0) {
      min = middle + 1;
    }
    else if (comparison == 0) {
        console.log("Iterations:", iterations);
        return {middle, iterations};
    }
    if (comparison == undefined || iterations > 20) {
        console.log("Couldn't find the value, breaking out");
        break;
    }
    console.log("UPDATED max, min, middle is:", max, min, middle);
  }
  console.log("Final iterations:", iterations);

  return {middle:-1};
}

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
