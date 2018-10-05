// Array Sort Wave

// Given an unsorted array of integers, sort the array into a wave like array. 
// An array ‘arr[0..n-1]’ is sorted in wave form if arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= 

// Input type: Array
// Sample imput:
// [10, 5, 6, 3, 2, 20, 100, 80]

const sortWave = (arr) => {
  const l = arr.length;
  arr.sort( (a, b) => {
    return a - b;
  });
  console.log(arr);
  for(let i=0; i<l-1; i+=2) {
    [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
  }
  return arr;
}

return execute = (string) => {
  const input = JSON.parse(string);
  const result = sortWave(input);
  console.log(result);

  return result;
}