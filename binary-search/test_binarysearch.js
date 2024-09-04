import { binarySearch } from "./binarysearch.js";
import { binarySearchRecursive } from "./binarysearch_recursive.js";

let valuesArray = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35, 40];
main();

function main() {
  addEventListeners();
  updateUI();
}

function addEventListeners() {
  document.querySelector("#search").addEventListener("submit", findValue);
  document.querySelector("#array-input").addEventListener("submit", arrayChanged);
}

function arrayChanged(e) {
  e.preventDefault();

  const values = e.target.input.value;
  const newArray = values.split(", ").map(entry => {
    if (isNaN(Number(entry))) {
      console.log("Its a number");

      return entry;
    }
    return Number(entry);
  });
  console.log("new array:", newArray);

  valuesArray = newArray.toSorted((value1, value2) => {
    if (typeof value1 == "string") {
      return value1.localeCompare(value2);
    } else if (value1 < value2) return -1;
    else if (value1 > value2) return 1;
    else if (value1 == value2) return 0;
  });
  console.log(valuesArray);
  updateUI();
}

function findValue(e) {
  e.preventDefault();
  const resultDisplay = document.querySelector("#search-result");

  let searchValue = e.target.search.value;
  if (!isNaN(Number(searchValue))) {
    searchValue = Number(searchValue);
  }
  console.log("search value:", searchValue);

  // Use either recursive or iterative:

  //   const {middle, iterations} = binarySearchRecursive(searchValue, valuesArray, 0, valuesArray.length);
  const { middle, iterations } = binarySearch(searchValue, valuesArray);
  document.querySelector("#result-container").hidden = false;

  if (middle == -1) {
    resultDisplay.innerHTML = "The value wasn't found in the array";
  } else {
    resultDisplay.innerHTML = `${middle}   - found in ${iterations} iterations`;
  }
}

function updateUI() {
  document.querySelector("#array-display").innerHTML = valuesArray.join(", ");
}
