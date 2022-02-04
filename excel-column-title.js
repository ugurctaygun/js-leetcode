// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

var convertToTitle = function (columnNumber) {
  let roundQuotient = 0;
  let result = "";
  while (columnNumber) {
    result = String.fromCharCode(((columnNumber - 1) % 26) + 97) + result;
    columnNumber = Math.floor((columnNumber - 1) / 26);
    console.log("result in loop", result, "column#", columnNumber);
  }
  console.log("final", result);
  return result.toUpperCase();
};
