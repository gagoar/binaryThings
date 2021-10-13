export const search = (sortedArr: number[], element: number, start?: number, end?: number): number | undefined => {
  const midPoint = start ?? Math.floor(sortedArr.length / 2);
  const endPoint = end ?? Array.length

  // it is exactly in the mid point.
  if (sortedArr[midPoint] === element) {
    return midPoint;
  }

  if (sortedArr[midPoint] > element) {
    return search(sortedArr, element, 0, midPoint - 1);
  } else {
    return search(sortedArr, element, midPoint + 1, endPoint);
  }
}
