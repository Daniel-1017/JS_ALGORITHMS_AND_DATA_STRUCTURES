const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      swap(arr, i, lowest);
    }
  }
  return arr;
};

selectionSort([50, 24, 66, 10, 1, 55]);

/* 
TIME COMPLEXITY
best - O(n^2)
average - O(n^2)
worst - O(n^2)

SPACE COMPLEXITY - O(1)

SELECTION SORT IS USEFUL WHEN YOU WANT TO MINIMIZE THE NUMBER OF SWAPS
*/
