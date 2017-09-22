import {test} from 'ava';

import fetchManyImages from './responsesInOrder';

const generatePsudoURLS = (length) => Array.from({length}, (_index) => `https://${_index}/image`);

test.cb('on called with 1 url, we get 1 elements returned', (t) => {
  t.plan(1);

  fetchManyImages('https://aProplerlyformedURL.com', (results) => {
    t.is(results.length, 1);
    t.end();
  });
});

test.cb('on called with 5 urls, we get 5 elements returned', (t) => {
  t.plan(1);
  const URLS = generatePsudoURLS(5);

  fetchManyImages(URLS, (results) => {
    t.is(results.length, URLS.length);
    t.end();
  });
});

test.cb('on called with 20 urls, we get 20 elements returned', (t) => {
  t.plan(1);

  const URLS = generatePsudoURLS(50);

  fetchManyImages(URLS, (results) => {
    t.is(results.length, URLS.length);
    t.end();
  });
});
