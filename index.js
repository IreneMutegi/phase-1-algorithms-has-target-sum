function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // Create a Set to store numbers we've seen

  for (const num of array) {
    const complement = target - num; // Calculate the required complement to reach the target

    // Check if the complement is already in the Set
    if (seenNumbers.has(complement)) {
      return true; // If it is, we've found a pair that adds up to the target
    }

    // Add the current number to the Set
    seenNumbers.add(num);
  }

  return false; // If no pairs were found, return false
}

/* 
  Time Complexity: O(n)
  - The function iterates through the array once, checking for the complement in the Set, which takes O(1) on average.
  - Therefore, the overall time complexity is O(n), where n is the length of the array.
*/

/* 
  Pseudocode:
  FUNCTION hasTargetSum(array, target)
    CREATE a Set called seenNumbers
    FOR each num in array DO
      SET complement = target - num
      IF seenNumbers contains complement THEN
        RETURN true
      ADD num to seenNumbers
    RETURN false
END FUNCTION
*/

/*
  Explanation of the solution:
  - We use a Set to keep track of the numbers we've already encountered in the array.
  - As we iterate through the array, we calculate the complement for each number (i.e., the difference between the target and the current number).
  - We check if this complement already exists in our Set. If it does, we return true, indicating we found two numbers that sum to the target.
  - If we finish checking all numbers without finding a pair, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
