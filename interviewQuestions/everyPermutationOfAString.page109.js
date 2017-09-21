const _factorialOf = (number) => {
  if (!number) {
    return 1;
  }
  return number * _factorialOf(number - 1);
};

const whenToStop = (letters) => _factorialOf(letters.length);

const swap = (array, pos1, pos2) => {
  let temp = array[pos1];

  array[pos1] = array[pos2];
  array[pos2] = temp;
};

const heapsPermute = (array, cb, n = array.length) => {
  if (n === 1) {
    cb(array);
  } else {
    for (let i = 1; i <= n; i += 1) {
      heapsPermute(array, cb, n - 1);
      let j = i;

      if (n % 2) {
        j = 1;
      }
      swap(array, j - 1, n - 1);
    }
  }
};


const permute = (word, uniq) => {
  let results = [];
  const letters = word.split('');

  return new Promise((resolve) => {
    heapsPermute(letters, (permutation) => {
      results.push(permutation.join(''));
      if (results.length === whenToStop(letters)) {
        if (uniq) {
          results = new Set(results);
        }
        resolve(results);
      }
    });
  });
};

export default permute;
