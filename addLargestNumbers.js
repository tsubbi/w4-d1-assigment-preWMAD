// function will take in an array, and add the two biggest numbers in the array

const addLargestNumbers = function(data) {
  if (data.length < 2) {
    return "Improper Data"
  }
  let max1 = Math.max(...data);
  let max2 = 0;
  for (i = 0; i < data.length; i++) {
    if (max2 < data[i] && data[i] < max1) {
      max2 = data[i];
    }
  }
  return max1 + max2;
};
  
  console.log(addLargestNumbers([1, 10]));
  // should return 11
  console.log(addLargestNumbers([1, 2, 3]));
  // should return 5
  console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));
  // should return 126