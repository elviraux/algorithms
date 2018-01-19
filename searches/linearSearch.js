/*
 Linear Search.
 Time Complexity O(n)
 Space Complexity O(1)
 */

export function linearSearch (elem, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === elem) {
      return i;
    }
  }
  return -1
}
