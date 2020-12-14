// write a function that counts the number of vowels in a given string and returns that value
// one potential solution may use the charAt() method, but this isnt the only solution
// you may alsop find the .contains() method useful.
//another useful couple of methods could be .split and .join
const isVowel = function(char) {
  return ("aeoiu".indexOf(char) != -1);
}

const vowelCounter = function(data) {
    // Put your solution here
    let cnt = 0;
    for (i = 0; i < data.length; i++) {
      if (isVowel(data[i])) {
        cnt++;
      }
    }

    return cnt;
};
  
  console.log(vowelCounter("orange"));
  // should return 3
  console.log(vowelCounter("Cornerstone"));
  // should return 4
  console.log(vowelCounter("aeiou"));
  // should return 5