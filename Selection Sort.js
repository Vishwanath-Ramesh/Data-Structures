/* Pick an element at the very beginning and compare it with the other elements. 
If it's lower than the picked one swap those and continue picking the next element until all the elements are sorted. */

function selectionSort(inputArray) {
  if (inputArray.length === 0) return inputArray;

  var pointer = 0,
    sortedElements = 0,
    ctr = 0,
    tempValue = null;

  while (sortedElements < inputArray.length) {
    if (inputArray[ctr] < inputArray[pointer]) pointer = ctr;

    if (ctr === inputArray.length - 1) {
      tempValue = inputArray[sortedElements];
      inputArray[sortedElements] = inputArray[pointer];
      inputArray[pointer] = tempValue;
      sortedElements++;
      pointer = sortedElements;
      ctr = pointer;
    } else ctr++;
  }
  return inputArray;
}

const result = selectionSort([
  100,
  4,
  17,
  91,
  56,
  82,
  92,
  72,
  59,
  69,
  18,
  2,
  96,
  3,
  88,
  24,
  28,
  81,
  96,
  80,
  76,
  43,
  36,
  60,
  29,
  100,
  33,
  38,
  71,
  98,
  97,
  57,
  92,
  88,
  37,
  48,
  46,
  38,
  54,
  65,
  52,
  34,
  70,
  82,
  54,
  77,
  11,
  80,
  38,
  87,
  12,
  81,
  95,
  12,
  61,
  57,
  61,
  26,
  64,
  70,
  40,
  84,
  20,
  83,
  64,
  44,
  90,
  14,
  34,
  82,
  67,
  54,
  50,
  23,
  86,
  72,
  67,
  31,
  12,
  15,
  90,
  61,
  32,
  18,
  17,
  59,
  39,
  76,
  57,
  22,
  81,
  95,
  82,
  30,
  18,
  40,
  25,
  11,
  90,
  39,
  9,
  60,
]);
console.log(result.join(" "));
