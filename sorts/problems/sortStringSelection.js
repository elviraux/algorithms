/*
Given an array of strings, sort the array using Selection Sort.

Examples:

Input  : paper true soap floppy flower
Output : floppy, flower, paper, soap, true
 */


import selectionSort from '../selectionSort'

function sortString(strings) {
  return selectionSort(strings)
} 