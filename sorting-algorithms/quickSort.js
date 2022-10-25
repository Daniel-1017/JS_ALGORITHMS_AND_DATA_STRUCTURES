const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);

  return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
};

console.log(quickSort([50, 24, 66, 10, 1, 55]));

/* 
  TIME COMPLEXITY
  best - O(n)
  average - O(n log n)
  worst - O(n^2)
  
  SPACE COMPLEXITY - O(1)
  
  THE PROBLEM IS WHEN WE HAVE AN ALREADY SORTED ARRAY, THERE WE DO O(n) DECOMPOSITIONS AND O(n) COMPARISONS PER DECOMPOSITION, SO WE GOT O(n^2). THE WORST IS TO PICK THE MIN OR MAX EVERY TIME.
  */
