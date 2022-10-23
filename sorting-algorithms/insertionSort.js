const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let currentVal = arr[i];
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

insertionSort([50, 24, 66, 10, 1, 55]);

/* 
TIME COMPLEXITY
best - O(n)
average - O(n^2)
worst - O(n^2)

SPACE COMPLEXITY - O(1)

INSERTION SORT IS USEFUL WHEN DATA IS COMING LIVE, IT IS A ALGORITH THAT WORK AS DATA IS COMING IN
*/
