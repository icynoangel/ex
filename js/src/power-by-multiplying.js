// Power of a number by multiplying values
 
// Input type: Object
// Sample input

/*
  { 
    "nr": 2,
    "power": 4
  }
  
  expected result: 16
*/

const power = (nr, n) => {
  
  console.log("By multiplying");
  let p = 1;
  
  for(let i=0; i<n; i++) {
    p = p * nr;
  }
  return p;
}

return execute = (string) => {

  const input = JSON.parse(string);
  const result = power(input.nr, input.power);
  
  console.log(result);
  return result;
}