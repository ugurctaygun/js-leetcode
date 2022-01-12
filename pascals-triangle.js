// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

var generate = function (numRows) {
  let arr = [];
  let pascalTriangle = [];

  for (i = 1; i <= numRows; i++) {
    for (j = arr.length - 1; j > 0; j--) {
      arr[j] += arr[j - 1];
    }
    arr.push(1);

    pascalTriangle.push([...arr]);
  }

  return pascalTriangle;
};

generate(2);
