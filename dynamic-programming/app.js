// recursive solution without memoization O(n^2)
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// recursive solution using memoization O(N)
const fib_memo = (n, memo = []) => {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  const res = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
  memo[n] = res;
  return res;
};
