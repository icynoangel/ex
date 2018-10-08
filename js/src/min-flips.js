// Min flips

// Given a binary string, that is it contains only 0s and 1s. 
// We need to make this string a sequence of alternate characters by flipping some of the bits, 
// our goal is to minimize the number of bits to be flipped

// Input type: string containing only 0 and 1
// Sample input

// "001"
// "0001010111"

const flip = (c) => {
  return c === '1' ? '0' : '1';
}

const countWithStartingChar = (s, expected) => {

  let l = s.length;
  let flips = 0;
  
  for(let i=0; i<l; i++) {
    if (s[i] !== expected) {
      flips++;
    }
    expected = flip(expected);
  }
  
  return flips;
}

const getMinFlips = (s) => {
  return Math.min(countWithStartingChar(s, '0'), countWithStartingChar(s, '1'));
}


return execute = (string) => {
  const input = JSON.parse(string);
  const result = getMinFlips(input);
  console.log(result);
  return result;
}