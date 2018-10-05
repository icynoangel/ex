// Ugly numbers

// Ugly numbers are numbers whose only prime factors are 2, 3 or 5

// Input type: number
// Input examples:
// 300
// 14

const devide = (nr, factor) => {
  while(nr % factor === 0) {
    nr /= factor;
  }
  return nr;
}

const uglyNumber = (nr) => {
  
  nr = devide(nr, 2);
  nr = devide(nr, 3);
  nr = devide(nr, 5);
  
  return nr === 1;
}

return execute = (string) => {

  const input = JSON.parse(string);

  const result = uglyNumber(input);
  console.log(result);
  return result;
}