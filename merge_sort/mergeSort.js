let iterations = 0;
let firstLength = -1;
export default function mergeSort(arr) {
  if (firstLength == -1) {
    console.log("setting first length");
    
    firstLength = arr.length;
  }

  iterations++;
  if (arr.length < 2) {
    return arr;
  }
  const splitIndex = Math.floor(arr.length / 2);
  const arrayPart1 = arr.slice(0, splitIndex);
  const arrayPart2 = arr.slice(splitIndex);

  const splitArray1 = mergeSort(arrayPart1);
  const splitArray2 = mergeSort(arrayPart2);

//   console.log("Merging:", splitArray1, "And:", splitArray2);
  const mergedArray = merge(splitArray1, splitArray2);
//   console.log("Merged:", mergedArray);

  if (firstLength == mergedArray.length) {
    console.log("\nSorted in", iterations, "iterations");
    firstLength = -1;
    iterations = 0;
  }

  return mergedArray;
}

function merge(arr1, arr2) {
  const mergedArray = [];

  while (arr1.length > 0 || arr2.length > 0) {
    iterations++;
    if (arr1.length == 0) {
      mergedArray.push(arr2.shift());
    } else if (arr2.length == 0) {
      mergedArray.push(arr1.shift());
    } else {
      const smallerElement = arr1[0] > arr2[0] ? arr2.shift() : arr1.shift();
      mergedArray.push(smallerElement);
    }
  }

  return mergedArray;
}
