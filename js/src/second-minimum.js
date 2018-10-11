// Find second minimum from a list, without sorting it, time complexity should be O(n)

// Input type: Array
// Input examples:
// [10, 9, 4, 7, 3, 20, 14]
// [10, 9, 22, 7, 3, 20, 4]
// [3, 9, 4, 7, 2, 20, 14]
// []

const secondMinimum = (arr) => {
  let l = arr.length;
  
  if(l < 2) {
    return 0;
  }
  
  let min = arr[0];
  let smin = arr[1] > min ? arr[1] : min;
  
  for(let i=1; i<l; i++) {
    if (arr[i] < min) {
      smin = min;
      min = arr[i];
    }
    if (arr[i] < smin && arr[i] > min) {
      smin = arr[i];
    }
  }
  return smin;
}

return execute = (string) => {
  const arr = JSON.parse(string);
  const result = secondMinimum(arr);
  console.log(result);
  return result;
}