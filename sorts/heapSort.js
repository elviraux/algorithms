/**
 * Heap Sort
 * Time Complexity O(N*LogN)
 * by using maxheap
 */

export function heapSort (array) {
  for (var i = 0; i < array.length; i++) {
    array = heapify(array, array.length, 0)
  }

  for (var i = array.length - 1; i > 0; i--) {
    [array[i], array[0]] = [array[0], array[i]]
    array = heapify(array, i, 0)
  }
  return array
}

function heapify(array, len, index) {
  let l = (2 * index + 1);
  let r = (2 * index + 2);
  let large = index;

  if (l < len && array[large] < array[l]) {
    large = l;
  }

  if (r < len && array[large] < array[r]) {
    large = r;
  }

  if (large !== index) {
    [array[index], array[large]] = [array[large], array[index]];
    array = heapify(array, len, large);
  }

  return array;
}