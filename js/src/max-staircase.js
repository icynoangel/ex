// Maximum Staircase

// Given N number of square blocks. 
// The height of each square block is 1. 
// The task is to create a  staircase of max height using these blocks.

// Note: The first stair would require only one block, the second stair would require two blocks and so on.

// Input type: number
// Sample input
// 0
// 1
// 5
// 6
// 10
// 12
// 16

const maxStaircase = (nbrBlocks) => {

  let maxHeight = 0;
  
  while(maxHeight < nbrBlocks) {
    maxHeight++;
    nbrBlocks -= maxHeight;
  }
  
  return maxHeight;

}

return execute = (string) => {
  
  const input = JSON.parse(string);
  const result = maxStaircase(input);
  
  console.log(result);
  
  return result;
}