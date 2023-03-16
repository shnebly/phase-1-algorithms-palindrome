function isPalindrome(word) {
  let reversedWord = word.split('').reverse().join('')
  return reversedWord === word
}

/* 
  name a function with one parameter
  take that parameter and reverse it
  there is a built in array method .reverse()
  in order for this to work you need to .split('') to create an array from the word
  .join('') the split array as a reversed word and compare the two
  return a boolean
*/

/*
  this function should take a string as input and a produce a boolean as output
  it will be true if the string letters are in the same order forwards as they are backwards
  can i reverse the string and compare the two?
  can i iterate through each letter, find the middle index (rounded up), compare the string from index[0] to middle index and from index[length-1] to middle index?

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("mom"));
  console.log("=>", isPalindrome("lololol"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("shelby"));
}

module.exports = isPalindrome;
