//https://leetcode.com/problems/add-two-numbers/

// NOT ASKING FOR ARRAY , ASKING FOR A LIST NODE

// LEARN WHAT A LIST NODE IS

var addTwoNumbersOfArrays = function (l1, l2) {
  let array1 = l1.reverse().toString().replaceAll(",", "");
  let array2 = l2.reverse().toString().replaceAll(",", "");
  let total = Number(array1) + Number(array2);
  let totalToArray = total.toString().split("");
  let newArray = [];
  for (let index in totalToArray) {
    let item = totalToArray[index];
    newArray.push(item);
  }
  return newArray.reverse();
};

var addTwoNumbersofListNodes = function (l1, l2) {
  //Dummy node to initiate returned linked list
  let sumList = new ListNode(0);
  //Keep pointer to result list head
  let sumListHead = sumList;
  //Initialize carry
  let carry = 0;

  //While either l1 or l2 have more nodes
  while (l1 || l2) {
    //Initialize sum
    let sum;
    //If both lists still have a node
    if (l1 && l2) {
      let val1 = l1.val;
      let val2 = l2.val;
      sum = val1 + val2 + carry;
      //If only one list has nodes left
    } else {
      sum = l1 ? l1.val + carry : l2.val + carry;
    }
    //Carry will be the integer representing 10's place, which will be added to next sum
    carry = Math.floor(sum / 10);

    //New node for results list will have only 1's place
    let newNodeVal = sum % 10;
    //Add new node to results list
    sumList.next = new ListNode(newNodeVal);
    sumList = sumList.next;

    //If the lists exist, increment node
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  //If carry still exists, add the carry as the final node of return list
  if (carry) {
    sumList.next = new ListNode(carry);
  }

  return sumListHead.next;
};
