/* eslint-disable no-param-reassign*/
// using callbacks,  call many async functions and get the responses in order.

const _noop = () => ({});

const getRandomNumber = () => (
  Math.floor((Math.random() * 100) + 1)
);

const fetchSingleImage = (url, callback) => (
  setTimeout(() => callback(true, url), getRandomNumber())
);

const fetchManyImages = (arrayOfURLs = [], onAllDone = _noop) => {
  // make sure we always have an array to avoid checking later on.
  if (!Array.isArray(arrayOfURLs)) {
    arrayOfURLs = [arrayOfURLs];
  }

  // we could make this check as elaborate as we would like
  // including iterating over the set and see if we have wellformed URLS.
  // for now we just check existance
  if (!arrayOfURLs.length) {
    throw new Error('please provide at least one URL.');
  }

  // where we would store our results
  let results = [];

  // we would keep track of the times cb has been called and with it decide if we have fulfilled our results
  // we could do it in many different ways, but any other way found adds time-space complexity.

  let cbCount = 0;

  const cb = (index, result) => {
    // we store every result in a specific index so we can return them in an organized way.
    results[index] = result;
    cbCount++;

    if (cbCount === arrayOfURLs.length) {
      onAllDone(results);
    }
  };

  arrayOfURLs.forEach((url, index) => {
    // we bind index to the callback in order to keep the index reachable when callback is called.
    let callback = cb.bind(null, index);

    fetchSingleImage(url, callback);
  });
};


export default fetchManyImages;
