const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i of nums) {
    maxDigits = Math.max(maxDigits, digitCount(i));
  }
  return maxDigits;
};

const radixSort = (nums) => {
  const maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

radixSort([50, 24, 66, 10, 1, 55]);

/* 
TIME COMPLEXITY
best - O(nk)
average - O(nk)
worst - O(nk)

n = LENGTH OF ARRAY
k = NUMBER OF DIGITS (EVERAGE)

SPACE COMPLEXITY - O(n + k)
*/
