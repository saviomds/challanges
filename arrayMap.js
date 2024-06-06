function subarraySum(arr, target) {
  //Create a map to store prefix sums
  const prefixSumMap = new Map();
  //initialize current sum
  let currentSum = 0;

  //Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // Add the current element to the current sum
    currentSum += arr[i];

    //if the current sum equals the target, return true
    if (currentSum === target) {
      return true;
    }

    //If there exists a prefix sum such that currentSum - target equals it,
    // return true
    if (prefixSumMap.has(currentSum - target)) {
      return true;
    }

    //store the current prefix sum in the map
    prefixSumMap.set(currentSum, true);
  }

  //If no subarray sums up to the target, return false
  return false;
}

//Example :
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(subarraySum(arr, target)); // output will be true
