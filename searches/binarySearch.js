/**
 * Binary search
 * Time complexity standart case O(logN)
 * Worst case O(N)
 */

export function binarySearch(array, l, r, elem) {
  if (r >= l) {
    let mid = Math.round((r - l)/2) + l;
    if (array[mid] === elem) {
      return mid;
    } else if (elem < array[mid]) {
      return binarySearch(array, l, mid - 1, elem)
    } else {
      return binarySearch(array, mid + 1, r, elem)
    }
  } else {
    return -1;
  }
}