export default function binarySearch(search, values, compareFunc) {
  let min = 0;
  let max = values.length;
  let middle;
  let iterations = 0;

  while (min <= max) {
    iterations++
    // for (let index = 0; index < 10; index++) {

    middle = Math.floor((max + min) / 2);
    console.log("PRE updated max, min, middle is:", max, min, middle);
    
    // console.log("max is:", max);
    // console.log("min is:", min);
    // console.log("middle is:", middle);

    let comparison;
    if (compareFunc) {
      comparison = compareFunc(values[middle], search);
    } else {
      comparison = standardCompare(values[middle], search);
    }

    console.log("comparison is:",comparison);
    
    if (comparison > 0) {
      max = middle - 1;
    } else if (comparison < 0) {
      min = middle + 1;
      // break;
    }
    console.log("UPDATED max, min, middle is:", max, min, middle);
    // if (min <= max) {middle = -1; break;}
     if (comparison == 0) {
        console.log("Iterations:",iterations);
        return middle;
    }
    if (middle == max || middle == min) {break}
    if (iterations > 20){console.log("Got stuck, breaking out");
     break;}
    // else if (comparison == 0) {found = true; break;}
  }
  console.log("Iterations:",iterations);
  
  return -1;
}

function standardCompare(arrayValue, search) {
    // return arrayValue - search;

  if (typeof search == "string") {
    // console.log("Its a string");
    return arrayValue.localeCompare(search);
  } else if (typeof search == "number") {
    // console.log("It's a number!");
    if (arrayValue < search ) return -1
    else if (arrayValue > search ) return 1
    else if (arrayValue == search ) return 0
    // return arrayValue < search ? -1 : arrayValue > search ? 1 : 0;
  } else {
    console.log("It was neither string or number");
  }
}
