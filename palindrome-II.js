// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

var isPalindrome = function (s) {
  let replaced = s
    .replace(/\s/g, "")
    .replace(/[.,\/#!$%@\^&\*;:{}=\-_`~()]/g, "")
    .toLowerCase();
  let a = Array.from(replaced);
  let b = Array.from(replaced).reverse();
  if (a.toString() === b.toString()) {
    return true;
  } else {
    return false;
  }
};

var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  return s.split("").reverse().join("") == s;
};

var isPalindrome = function (s) {
  let low = 0,
    high = s.length - 1;
  while (low < high) {
    // validate character at both pointers
    while (low < high && !isAlphaNumeric(s[low])) low++;
    while (low < high && !isAlphaNumeric(s[high])) high--;

    if (s[low].toLowerCase() !== s[high].toLowerCase()) return false;
    low++, high--;
  }
  return true;
  // T.C: O(N)
  // S.C: O(1)
};

function isAlphaNumeric(x) {
  let code = x.charCodeAt();
  return (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  );
}

isPalindrome("ab@a ");
