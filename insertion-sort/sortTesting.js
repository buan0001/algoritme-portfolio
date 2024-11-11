import { insertionSortShift, insertionSortSwap } from "./insertionSort.js";

const testArray = [5, 3, 8, 4, 7, 2, 1, 7, 6, 9, 3];
const testArray2 = [7, 1, 5, 2, 8, 1, 4, 0, 1, 4];

const shiftSort = insertionSortShift(testArray);
console.log("Sorted by shifting:", shiftSort);

const swapSort = insertionSortSwap(testArray2);
console.log("Sorted by swapping:", swapSort);
