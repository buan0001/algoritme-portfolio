export function insertionSortShift(arr) {
  let iterations = 0;
  if (arr && arr.length > 1) {
    // Loop through every element in the arry
    for (let i = 1; i < arr.length; i++) {
      // Save the value at the current index, otherwise it's lost during the shift-loop
      let current = arr[i];
      // Check the element against every element preceding it
      // We iterate until -1 since the current element should go to the front of the array
      // It ends up comparing against undefined which could maybe cause issues, but it works (in JS anyway)
      for (let j = i; j > -1; j--) {
        // As long as it's smaller than the previous element
        // we replace the current index's value with the previous one's
        if (current < arr[j - 1]) {
          arr[j] = arr[j - 1];
          iterations++;
        } else {
          //   console.log("Else:", arr[j], arr[j - 1]);
          // Finally we set the index we arrived at's value to current (the start value)
          arr[j] = current;
          break;
        }
      }
      iterations++;
    }
    console.log("Iterations:", iterations);
    return arr;
  }
}

export function insertionSortSwap(arr) {
  let iterations = 0;
  if (arr && arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      const current = arr[i];
      let j = i;
      while (j > 0 && arr[j] < arr[j - 1]) {
        swap(j, j - 1);
        j--;
        iterations++;
      }
      arr[j] = current;
      iterations++;
    }
    if (iterations == arr.length) {
      console.log("Array was already sorted");
    } else {
      console.log("Iterations:", iterations);
    }
    return arr;
  }

  function swap(indexA, indexB) {
    const temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
  }
}
