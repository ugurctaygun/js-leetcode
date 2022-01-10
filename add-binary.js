// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

var addBinary = function (a, b) {
  let binaryA = BigInt(`0b${a}`);
  let binaryB = BigInt(`0b${b}`);
  let sum = binaryA + binaryB;
  return sum.toString(2);
};

var addBinary = function (a, b) {
  let r = [];
  if (b.length > a.length) {
    [a, b] = [b, a];
  }

  let map = [
    ["0", "0", "0", "0", "0"],
    ["0", "0", "1", "1", "0"],
    ["1", "0", "0", "1", "0"],
    ["1", "0", "1", "0", "1"],
    ["1", "1", "0", "0", "1"],
    ["1", "1", "1", "1", "1"],
    ["0", "1", "0", "1", "0"],
    ["0", "1", "1", "0", "1"],
  ];

  let find = (c, d, ca) => {
    for (let m of map) {
      if (m[0] == c && m[1] == d && m[2] == ca) {
        return [m[3], m[4]];
      }
    }
    throw "not found";
  };

  let ai = a.length - 1,
    bi = b.length - 1;

  let car = "0";
  let r0 = "0";

  while (ai >= 0) {
    [r0, car] = find(a[ai], b[bi] || "0", car);
    r.push(r0);

    ai--;
    bi--;
  }

  if (car == "1") r.push("1");

  let o = r.reverse().join("");
  return o;
};

addBinary("11", "1");
