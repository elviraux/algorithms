/**
 * Insertion sort
 * Time complexity O(N^2)
 * Space complexity O(1)
 */

export function insertionSort(array) {
  for(var i = 1; i < array.length; i++) { // -1
    for (var j = i; j > 0; j--) {
      if (array[j] < array[j-1]) { 
        [array[j], array[j-1]] = [array[j-1], array[j]]
      }
    }
  }
  return array;
}
