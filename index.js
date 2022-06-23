// write a function hasTargetSum 
// which looks through an array 
//tries to find two values whose sum equals to the target number 
function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i=0;i<array.length;i++){
    for(let j=0; j=i+1<array.length;j++){
      if(array[i]+array[j]=== target){
       // return true;
      }
    }
   // return false
  }
 
}
//hasTargetSum([3,2,5,7],12)


/* 
  Write the Big O time complexity of your function here
  The algorithm loops through the n elements in an array twice thus taking two steps
  The time complexity will therefore be O(n*n).
*/

/* 
  Add your pseudocode here
  1.loop through the first item(i)
  2.loop through the second ietm (j)
  3. add i+j
  4.if i+j=target return (i,j)
*/

/*
  Add written explanation of your solution here
  1. I created a function that takes in two parameters  of array and target
  2. The function takes in a for loop
  3.Within the loop two individual items in the array are added to each other
  4.The result of the sum is then compared to the target value
  5. If the two values are equal, the boolean true is returned, however if they are not equal, a false is returned.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([7, 8, 12, 4, 11, 7], 14));


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
