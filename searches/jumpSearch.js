/**
 * Jump search
 * Standart complexity O((m-1) + n/m)
 */

export function jumpSearch(array, elem, step) {
  if (array[0] === elem) {
    return 0;
  }
  if (array[step] === elem) {
    return step;
  } else if (elem > array[step]) {
    return jumpSearch(array, elem, step*step)
  } else if (step >= array.length || elem < array[step]) {
    for (var i = step/step; i < step; i++) {
      if (elem === array[i]) {
        return i;
      }
    }
    return -1
  }
}