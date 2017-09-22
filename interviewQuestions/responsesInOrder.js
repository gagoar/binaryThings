/* eslint-disable no-param-reassign*/
// using callbacks,  call many async functions and get the responses in order.
const getRandomNumber = () => (
  Math.floor((Math.random() * 100) + 1)
);

const fetchSingleImage = (url, callback) => (
  setTimeout(() => callback(true, url), getRandomNumber())
);

const fetchManyImages = (arrayOfURLs = [], onAllDone) => {
  if (!Array.isArray(arrayOfURLs)) {
    arrayOfURLs = [arrayOfURLs];
  }

  let results = [];
  let cbCount = 0;

  const cb = (index, result) => {
    results[index] = result;
    cbCount++;

    if (cbCount === arrayOfURLs.length) {
      onAllDone(results);
    }
  };

  arrayOfURLs.forEach((url, index) => {
    let callback = cb.bind(null, index);

    fetchSingleImage(url, callback);
  });
};


export default fetchManyImages;
