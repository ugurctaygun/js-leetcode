// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function (nums) {
  let majority;
  let max = 0;
  let uniques = [...new Set(nums)];
  for (let i = 0; i < uniques.length; i++) {
    if (nums.filter((item) => item === uniques[i]).length > max) {
      max = nums.filter((item) => item === uniques[i]).length;
      majority = uniques[i];
    }
  }
  return majority;
};

var majorityElement = function (nums) {
  let majorityElement = nums[0];
  let counter = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === majorityElement) counter++;
    else counter--;

    if (counter === 0) {
      majorityElement = nums[i];
      counter = 1;
    }
  }

  return majorityElement;
};

majorityElement([1, 2]);
