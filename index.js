function isPalindrome(word) {
  // Write your algorithm here
  let forwards = (word) => {
    let arr = []
    for (let i = 0; i < word.length/2; i ++){
      arr.push(word[i])
    }
    return arr
  }

  let backwards = (word) => {
    let arr2 = []
    for (let i = 0; i < word.length/2; i ++){
      arr2.push(word[word.length-i-1])
    }
    return arr2
  }
  
  let arr1 = forwards(word)
  let arr2 = backwards(word)
  let res = true

  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] != arr2[i]){
      res = false
      break
    }
  }

  return res
}

/* 
  Add your pseudocode here

  1. Create two variables, one to store the word read forwards, and one to store the word read backwards
  2. We will iterate through the word starting from index 0 for one var
  3. for the other we can just pop each letter out of the string
  4. if the content of both variables are the same we return true

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


//optimal solution
// function isPalindrome(word) {
//   for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
//     const endIndex = word.length - 1 - startIndex;
//     if (word[startIndex] !== word[endIndex]) {
//       return false;
//     }
//   }

//   return true;
// }
