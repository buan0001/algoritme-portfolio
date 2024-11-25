import mergeSort from "./mergeSort.js";
const testArray1 = [3, 1, 6, 9, 2, 5, 3, 8, 6, 5, 4, 2, 7, 3, 2, 4, 3, 2, 4, 1];
const sorted1 = mergeSort(testArray1);
console.log("Sorted to:", sorted1);
console.log("From:",testArray1, "\nWith length:", testArray1.length);

const testArray2 = [6, 8, 3, 6, 1, 0, 5, 7, 2, 3]
const sorted2 = mergeSort(testArray2);
console.log("Sorted to:", sorted2);
console.log("From:",testArray2, "\nWith length:", testArray2.length);