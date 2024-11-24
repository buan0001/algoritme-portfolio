function heapSort(unsortedArray) {}

// Creates a 'max heap' from an array
function heapify(array) {
    const arraySize = array.length
    // We start from the end of the array
    let startIndex = indexOfParent(arraySize - 1);
}

// Checks if a parent is lesser than its children. If so:
// Swap the two and compare again.
// Keep going until the "parent" only has no or lesser value children
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
