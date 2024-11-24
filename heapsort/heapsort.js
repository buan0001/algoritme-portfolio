function heapSort(arrayToSort) {
  console.log("Pre sorted array:", arrayToSort);

  heapify(arrayToSort); // Create a max heap from the unsorted array
  console.log("Max heaped array:", arrayToSort);
  let endIndex = arrayToSort.length;
  while (endIndex > 1) {
    endIndex -= 1;
    // Endindex marks the last element in the array that is part of the heap
    // Anything after endindex is part of the final sorted array
    // And the value at index 0 will always be the highest value left in the heap
    // So we can swap this value with that last one every time
    swap(arrayToSort, endIndex, 0);
    // We now no longer know if the value at index 0 is the highest in the heap
    // So we call siftDown to make sure it's swapped with its children -
    // Until the heap property is reestablished
    siftDown(arrayToSort, 0, endIndex);
  }
  console.log("Hopefully sorted array:", arrayToSort);
}

// Creates a 'max heap' from an array
function heapify(array) {
  const arraySize = array.length;
  // We start from the middle of the array and build the heap from there
  // There's no reason to start from the end since we use "down sifting";
  // There's nothing to sift down to at the end of the tree.
  let startIndex = indexOfParent(arraySize - 1);
  while (startIndex >= 0) {
    siftDown(array, startIndex, arraySize);
    startIndex -= 1;
  }
}

// Checks if a parent is lesser than its children. If so:
// Swap the two and compare again.
// Keep going until the "parent" only has lesser value children or none at all.
// This is to maintain the "heap property"
function siftDown(arr, parentIndex, endIndex) {
  let childIndex = indexOfLeftChild(parentIndex);
  // In the worst case, we keep going until the parent has no more children
  // (The left child will always be at a lower index than the right child)
  while (childIndex < endIndex) {
    // Start out with the left child
    // Check which of the children are greater
    if (childIndex + 1 < endIndex && arr[childIndex] < arr[childIndex + 1]) {
      childIndex = childIndex + 1; // Swap the two if right child is greater than left
    }
    if (arr[parentIndex] < arr[childIndex]) {
      swap(arr, parentIndex, childIndex); // Swap child and parent
      // The parent's index should also be swapped with its child
      // So we can continue comparing it to it's new children
      parentIndex = childIndex;
      childIndex = indexOfLeftChild(parentIndex); // And set the index of the new left child
    } else {
      // None of the parent's children were greater, so we can end
      return;
    }
  }
}

function indexOfLeftChild(index) {
  return 2 * index + 1;
}

function indexOfRightChild(index) {
  return 2 * index + 2;
}

function indexOfParent(index) {
  return Math.floor((index - 1) / 2);
}

function swap(arr, index1, index2) {
  const tempValue = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tempValue;
}

const randomArr = [4, 2, 6, 9, 1, 4, 2, 3, 7, 6];
heapSort(randomArr);
