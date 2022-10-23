const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

const bubbleSort = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
};

bubbleSort([50, 24, 66, 10, 1, 55]);

/* 
TIME COMPLEXITY
best - O(n)
average - O(n^2)
worst - O(n^2)

SPACE COMPLEXITY - O(1)

BUBBLE SORT IS USEFUL WHEN YOU KNOW YOUR DATA IS NEARLY SORTED
*/
