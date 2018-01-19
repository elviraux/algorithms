/**
 * Selection sort
 * Time complexity O(N^2)
 * Space complexity O(1)
 */

function selectionSort(array) {
  for (var i = 0; i < array.length - 1; i++) { 
    let min = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) { min = j }
    }
    [array[i], array[min]] = [array[min], array[i]]
  }

  return array;
}
