// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'

var isValid = function (s) {
  let stack = [];
  for (let ch of s) {
    if (ch == "(" || ch == "[" || ch == "{") {
      stack.push(ch);
    } else {
      let tmp = stack.pop();
      switch (ch) {
        case ")":
          if (tmp != "(") return false;
          break;
        case "]":
          if (tmp != "[") return false;
          break;
        case "}":
          if (tmp != "{") return false;
          break;
        default:
          return false;
      }
    }
  }
  return stack.length == 0;
};

isValid("()[]()}");
