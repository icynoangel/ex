// Egg problem

// The following is a description of the instance of this famous puzzle involving n=2 eggs and a building with k=36 floors.
// Suppose that we wish to know which stories in a 36-story building are safe to drop eggs from, and which will cause the eggs to break on landing. We make a few assumptions:

// An egg that survives a fall can be used again.
// A broken egg must be discarded.
// The effect of a fall is the same for all eggs.
// If an egg breaks when dropped, then it would break if dropped from a higher floor.
// If an egg survives a fall then it would survive a shorter fall.
// It is not ruled out that the first-floor windows break eggs, nor is it ruled out that the 36th-floor do not cause an egg to break.

// If only one egg is available and we wish to be sure of obtaining the right result, the experiment can be carried out in only one way. Drop the egg from the first-floor window; if it survives, drop it from the second floor window. Continue upward until it breaks. In the worst case, this method may require 36 droppings. Suppose 2 eggs are available. What is the least number of egg-droppings that is guaranteed to work in all cases?
// The problem is not actually to find the critical floor, but merely to decide floors from which eggs should be dropped so that total number of trials are minimized.

// Solution:
// When we drop an egg from a floor x, there can be two cases (1) The egg breaks (2) The egg doesn’t break.

// 1) If the egg breaks after dropping from xth floor, then we only need to check for floors lower than x with remaining eggs; so the problem reduces to x-1 floors and n-1 eggs
// 2) If the egg doesn’t break after dropping from the xth floor, then we only need to check for floors higher than x; so the problem reduces to k-x floors and n eggs.

// Since we need to minimize the number of trials in worst case, we take the maximum of two cases. We consider the max of above two cases for every floor and choose the floor which yields minimum number of trials.


// Not optimal implementation:
// n - number of eggs
// k - number of floors
 
// Input type Array
// [nbr_eggs, nbr_floors]
// Sample:
// [2, 10]
// [3, 20]

const eggDrops = (n, k) => {

  // one floor or no floor
  if (k === 1 || k === 0) {
    return k;
  }
  
  // one egg - all floors
  if (n === 1) {
    return k;
  }
  
  let min = 2147483647;
  
  // Consider all droppings from 1st floor to kth floor and 
  // return the minimum of these values plus 1
  for(let x=1; x <= k; x++) {
    let result = Math.max(eggDrops(n-1, x-1), eggDrops(n, k-x));
    if (result < min) {
      min = result;
    }
  }
  
  return min + 1;
}

return execute = (string) => {
  
  const input = JSON.parse(string);
  if (input[1] > 20) {
    return 'Please use a maximum number of 20 floors';
  }
  
  const result = eggDrops(input[0], input[1]);
  console.log(result);
  return result;
}