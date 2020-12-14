// write a function that returns the sum of all the numbers that are either 'even', or 'odd'
// if not enough numbers return "Improper Input"

const isEven = function(num) {
  return num % 2 === 0;
}

const conditionalAdding = function(values, condition) {
  if (values.length < 1) {
    return "improper input";
  }

  let result = 0;

  for (i = 0; i < values.length; i++) {
    switch (condition) {
      case "even":
        if (isEven(values[i])) {
          result += values[i];
        }
        break;
      case "odd":
        if (!isEven(values[i])) {
          result += values[i];
        }
        break;
      default:
        break;
    }
  }

  return result;
};
  
  console.log(conditionalAdding([1, 2, 3, 4, 5], "even"));
  // should return 6
  console.log(conditionalAdding([1, 2, 3, 4, 5], "odd"));
  // should return 9
  console.log(conditionalAdding([13, 88, 12, 44, 99], "even"));
  // should return 144
  console.log(conditionalAdding([], "odd"));
  // should return "improper input"