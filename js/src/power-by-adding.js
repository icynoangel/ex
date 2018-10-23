// Power of a number by adding values
 
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
  
  console.log("By adding");
  let p = 1;
  let currentVal = nr;
  
  for(let i=1; i<=n; i++) {
    p = 0;
    if(i == 1) {
      currentVal = nr;
      p = nr;
    } else {
      for(let j=0; j<Math.abs(nr); j++) {
        p += currentVal;
      }
      currentVal = p;
    }
  }
  
  if (n % 2 === 0) {
    p = Math.abs(p);
  }

  return p;
}

return execute = (string) => {

  const input = JSON.parse(string);
  const result = power(input.nr, input.power);
  console.log(result);
  return result;
}