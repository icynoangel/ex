// Merge 2 strings

// Given two strings S1 and S2 as input, the task is to merge them alternatively
// i.e. the first character of S1 then the first character of S2 and so on till the strings end.

// Input type: Array
// Sample input:
// ["Hello", "Bye"]   -> HBeylelo


const mergeStrings = (s1, s2) => {
  const l1 = s1.length;
  const l2 = s2.length;
  const max = l1 > l2 ? l1 : l2;
  
  let res = '';
  
  for(var i=0; i<max; i++) {
    if(s1[i]) {
      res += s1[i];
    }
    if(s2[i]) {
      res += s2[i];
    }
  }

  return res;
}

return execute = (string) => {
  console.log(string);
  const input = JSON.parse(string);
  const result = mergeStrings(input[0], input[1]);
  console.log(result);

  return result;
}
