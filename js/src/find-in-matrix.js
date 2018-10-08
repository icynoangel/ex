// Search in a matrix

// Given an n x m matrix, where every row and column is sorted in increasing order, and a number x.
// The task is to find whether element x is present in the matrix or not.

// Expected Time Complexity : O(m + n)

// Input type: Object
// Sample: (m = number of rows, n = number of columns)
// {"m": 3, "n": 3, "values": [3, 30, 38, 44, 52, 54, 57, 60, 69], "search": 62}
// {"m": 1, "n": 6, "values": [18, 21, 27, 38, 55, 67], "search": 55}


const findInMatrix = (matrix, nbr) => {

  let nbrRows = matrix.length;
  let nbrColumns = matrix[0].length;
  let found = false;
  
  if (nbr < matrix[0][0] || nbr > matrix[nbrRows-1][nbrColumns-1]) {
    return found;
  }
  
  for(let i=0; i<nbrRows; i++) {
    // it might be in current row
    if (nbr >= matrix[i][0] && nbr <= matrix[i][nbrColumns-1]) {
      for(let j=0; j<nbrColumns; j++) {
        if (nbr === matrix[i][j]) {
          found = true;
          break;
        }
      }
      if (found) {
        break;
      }
    }
  }
  
  return found;
}

const constructMatrix = (input) => {
  
  let matrix = [];
  let l = input.values.length;
  
  for(let i=0; i<l; i+=input.n) {
    matrix.push(input.values.slice(i, i+input.n));
  }
  
  return matrix;
}

return execute = (string) => {
  const input = JSON.parse(string);

  let res = "";
  const matrix = constructMatrix(input);
  console.log(matrix);

  const result = findInMatrix(matrix, input.search);
  console.log(result);
  res += " Found: " + result;

  console.log(res);
  
  return res;
}
