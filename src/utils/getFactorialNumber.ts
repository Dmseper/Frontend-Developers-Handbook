export function getFactorialNumber(n) {
  if (n === 1) return 1
  return n * getFactorialNumber(n - 1)
}